import css from "./Staff.module.css";

export function Staff(): JSX.Element {

    const now = new Date();
    const day = now.getDay() + 1;
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };

    return (
        <div className={css.Staff}>
            { day !== 1 && <p>We don't have Help Desk Support today</p>}
            { day === 1 && <p>Now, on {now.toLocaleString('en-US', options)} - Help Desk Support</p>}
        </div>
    );
}
