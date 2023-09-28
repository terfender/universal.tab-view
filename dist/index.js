import { useCallback } from "react";
import { Platform, StatusBar, View } from "react-native";
import { CollapsibleTabView } from "@showtime-xyz/universal.collapsible-tab-view";
import { Haptics } from "@showtime-xyz/universal.haptics";
import { useIsDarkMode } from "@showtime-xyz/universal.hooks";
import { colors } from "@showtime-xyz/universal.tailwind";
import { RefreshControl } from "./refresh-control";
import { ScollableAutoWidthTabBar } from "./scrollable-auto-width-tab-bar";
import { ScollableTabBar } from "./scrollable-tab-bar";
import { TabSpinner } from "./tab-spinner";
export * from "@showtime-xyz/universal.collapsible-tab-view";
export * from "./tab-flash-list";
export * from "react-native-tab-view-next";
export * from "./tab-flash-list-scroll-view";
export * from "./tab-bar-single";
export * from "./tab-spinner";
export * from "./scrollable-auto-width-tab-bar";
export * from "./scrollable-tab-bar";
export * from "./tab-bar-vertical";
export const StatusBarHeight = StatusBar.currentHeight ?? 0;
function HeaderTabView({
  autoWidthTabBar,
  renderScene,
  navigationState,
  hideTabBar = false,
  renderTabBar: renderTabBarProps,
  ...props
}) {
  const isDark = useIsDarkMode();
  const renderTabBar = useCallback(
    (props) => {
      if (
        hideTabBar ||
        !props.navigationState?.routes ||
        props.navigationState?.routes?.length === 0
      ) {
        return null;
      }
      if (renderTabBarProps) {
        return renderTabBarProps(props);
      }
      return (
        <>
          {autoWidthTabBar ? (
            <ScollableAutoWidthTabBar {...props} />
          ) : (
            <ScollableTabBar {...props} />
          )}
        </>
      );
    },
    [autoWidthTabBar, hideTabBar, renderTabBarProps]
  );
  const onPullEnough = useCallback(() => {
    Haptics.impactAsync();
  }, []);
  const _renderScene = (props) => {
    const focused =
      navigationState.index === props.route?.index || Platform.OS !== "web";
    return (
      <>
        <View style={{ flex: 1, display: focused ? "flex" : "none" }}>
          {renderScene(props)}
        </View>
        {Platform.OS === "web" && (
          <TabSpinner
            index={props.route?.index}
            style={{ display: focused ? "none" : "flex" }}
          />
        )}
      </>
    );
  };
  return (
    <CollapsibleTabView
      renderTabBar={renderTabBar}
      lazy
      onPullEnough={onPullEnough}
      minHeaderHeight={StatusBarHeight}
      refreshControlColor={isDark ? colors.gray[400] : colors.gray[700]}
      refreshHeight={60}
      renderScene={_renderScene}
      navigationState={navigationState}
      renderRefreshControl={RefreshControl}
      {...props}
    />
  );
}
export { HeaderTabView };
//# sourceMappingURL=index.js.map
