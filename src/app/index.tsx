import * as React from 'react';
const styles = require('./style.less');

interface IProps {
    name: string
}
interface IState {
    number: number
}

export default class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            number: 1
        }
    }
    render() {
        return (
            <div className={styles.a}>
                <p className={styles.b}>
                    {this.state.number}
                </p>
            </div>
        )
    }

}


















