import { memo } from "react";
import { TabScrollView } from "@showtime-xyz/universal.collapsible-tab-view";
import { Spinner } from "@showtime-xyz/universal.spinner";
import { View } from "@showtime-xyz/universal.view";
export const TabSpinner = memo(function TabSpinner({ index, style, }) {
    return (<TabScrollView style={style} index={index}>
      <View tw="h-60 items-center justify-center">
        <Spinner size="small"/>
      </View>
    </TabScrollView>);
});
//# sourceMappingURL=tab-spinner.js.map