import { TCategoryBanner } from "./category-banner.type"
import { TCategoryDescription } from "./category-description.type"

export type TCategoryContent = {
  banner: TCategoryBanner,
  gallery: Array<string>,
  descriptionList: Array<TCategoryDescription>
}
