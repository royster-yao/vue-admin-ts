import { Validator } from './formValidate'
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

export default class Utils {
  public static getModuleName(path: string, moduleSuffix: string): string {
    path = path.replace(/([^]*)\//gi, '').replace('.ts', '')
    const firstChar = path.split('')[0]
    const firstCharUpperCase = firstChar.toUpperCase()
    const resModuleName = path.replace(firstChar, firstCharUpperCase)
    return resModuleName + moduleSuffix
  }

  public static generateMenuInfo(
    routes: RouteRecordNormalized[]
  ): RouteRecordNormalized[] {
    const menuRoutes = routes.reduce<RouteRecordNormalized[]>(
      (menuRoutes, route) => {
        if (route.children.length !== 0) {
          menuRoutes.push(route)
        }
        return menuRoutes
      },
      []
    )
    return menuRoutes
  }

  public static isExternal(path: string): boolean {
    return /^(https?:|mailto:|tel:)/.test(path)
  }

  public static Validator = Validator
}
