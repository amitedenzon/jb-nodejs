import css from "./Copyright.module.css"

export function Copyright(): JSX.Element {
    return (
        <div className="Copyright">
            <p className={css.longText}>All rights belong to FISHI</p>
        </div>
    )
}