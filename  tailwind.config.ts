/*
 * @Author: wangxuan wangxuanniu@yeah.net
 * @Date: 2024-07-24 10:04:00
 * @LastEditors: wangxuan wangxuanniu@yeah.net
 * @LastEditTime: 2024-07-24 10:04:20
 * @FilePath: /nuxt3-app/tailwindcss.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      }
    }
  }
}
