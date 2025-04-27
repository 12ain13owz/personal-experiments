import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
  name: "validation",
})
export class ValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, errorObj: Record<string, unknown>): unknown {
    return value[Object.keys(errorObj)[0]]
  }
}
