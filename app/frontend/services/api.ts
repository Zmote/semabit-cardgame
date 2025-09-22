export const csrfToken = (() => {
  return document.querySelector<HTMLMetaElement>('meta[name=\'csrf-token\']')?.content ?? ''
})()

// TODO: Build API interface, maybe use Axios
