import React from "react";
import Animated from "react-native-reanimated";
import { SceneComponent } from "@showtime-xyz/universal.collapsible-tab-view";
function TabFlashListScrollViewComponent(props, ref) {
    return (<SceneComponent {...props} useExternalScrollView forwardedRef={ref} ContainerView={Animated.ScrollView}/>);
}
export const TabFlashListScrollView = React.forwardRef(TabFlashListScrollViewComponent);
//# sourceMappingURL=tab-flash-list-scroll-view.js.map