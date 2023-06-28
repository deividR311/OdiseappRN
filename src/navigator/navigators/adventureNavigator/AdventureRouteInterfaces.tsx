export enum AdventureNavigationRoute {
    AdventureScreen = 'AdventureScreen',
    PermissionsScreen = 'PermissionsScreen',
  }

  export type AdventureNavigationParams = {
    [AdventureNavigationRoute.AdventureScreen]: undefined;
    [AdventureNavigationRoute.PermissionsScreen]: undefined;
  };