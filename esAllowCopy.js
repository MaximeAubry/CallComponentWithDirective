import Vue from 'vue'

// Initialize the md-copy directive
export const EsAllowCopy = {
  bind (element, binding, vnode) {
    // default value
    if (binding.value === undefined) {
      binding.value = true
    }

    if (binding.value) {
      var newElement = document.createElement('md-copy')
      newElement.classList.add('md-copy')
      element.parentNode.insertBefore(newElement, element.nextSibling)
    }
  }
}

Vue.directive('es-allow-copy', EsAllowCopy)
