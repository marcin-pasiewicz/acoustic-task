export function prepareElements(elements: any, order: any[]) {
  return order.map(item => {
    return elements[item] && {
      ...elements[item],
      elementName: item,
    }
  }).filter(item => item !== undefined)
}