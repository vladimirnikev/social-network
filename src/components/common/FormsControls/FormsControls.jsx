import React from 'react'
import s from './FormsControls.module.css'

// const FormsControl = (Component) => ({ input, meta, ...props }) => {
//     return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
//         <Component {...input} {...props} />
//         {meta.error && meta.touched && <span>{meta.error}</span>}
//     </div>
// }

// export const Textarea = FormsControl('textarea')

// export const Input = FormsControl('input')


export const Textarea = ({ input, meta, ...props }) => {
    return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
        <textarea {...input} {...props} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
}

export const Input = ({ input, meta, ...props }) => {
    return <div className={s.customTextarea + ' ' + (meta.error && meta.touched ? s.error : '')}>
        <input {...input} {...props} />
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
}

