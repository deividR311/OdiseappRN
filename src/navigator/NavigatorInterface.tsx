export enum NavigationRoute {
  Tabs = 'Tabs',
  Login = 'Login'
}

export type NavigationParams = {
  [NavigationRoute.Tabs]: undefined;
  [NavigationRoute.Login]: undefined;
};