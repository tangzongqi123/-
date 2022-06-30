import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
export function globalRegister(app: App) {
  // registerElement(app)
  app.use(registerElement)
  app.use(registerProperties)
}
