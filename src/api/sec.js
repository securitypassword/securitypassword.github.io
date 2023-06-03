export const from64 = function(text){
  return decodeURIComponent(escape(atob(text.replace(/-/g, "+")
  .replace(/_/g, "/"))))
}