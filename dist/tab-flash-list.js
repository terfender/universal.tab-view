import React from "react";
import { Platform } from "react-native";
import { useHeaderTabContext } from "@showtime-xyz/universal.collapsible-tab-view";
import { InfiniteScrollList, } from "@showtime-xyz/universal.infinite-scroll-list";
import { TabFlashListScrollView } from "./tab-flash-list-scroll-view";
function TabInfiniteScrollListComponent(props, ref) {
    const { scrollViewPaddingTop } = useHeaderTabContext();
    return (<InfiniteScrollList {...props} {...Platform.select({
        web: {},
        default: { renderScrollComponent: TabFlashListScrollView },
    })} contentContainerStyle={{ paddingTop: scrollViewPaddingTop }} ref={ref}/>);
}
export const TabInfiniteScrollList = React.forwardRef(TabInfiniteScrollListComponent);
//# sourceMappingURL=tab-flash-list.js.map