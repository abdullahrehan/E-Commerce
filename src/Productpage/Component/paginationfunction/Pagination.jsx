    import React from 'react'
import _ from 'lodash'

export  function pagination(products, pages,productperpage) {
    const start=(pages-1)*productperpage
   return _(products).slice(start).take(productperpage).value()

}
