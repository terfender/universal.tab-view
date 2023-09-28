// on Web, we don't use React Navigation, so we are going to avoid the safe area provider
// instead, we just have a no-op here
// for more, see: https://solito.dev/recipes/tree-shaking
// if you need safe area hooks yourself, you can implement this yourself
// however, you may be better off using the CSS selector for env(safe-area-inset-top) on Web
export const SafeAreaProvider = ({ children, }) => <>{children}</>;
const area = {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    // you could also use CSS env variables like below:
    // but you'll have to be sure to override the types for `useSafeArea`
    // and make sure to never add numbers and strings when you consue useSafeArea
    // just keep in mind that the env() doesn't work on older browsers I think
    // top: `env(safe-area-inset-top)`,
    // right: `env(safe-area-inset-right)`,
    // bottom: `env(safe-area-inset-bottom)`,
    // left: `env(safe-area-inset-left)`,
};
export function useSafeAreaInsets() {
    return area;
}
export function useSafeAreaFrame() {
    return area;
}
export function SafeAreaView({ children }) {
    return <>{children}</>;
}
//# sourceMappingURL=index.web.js.map