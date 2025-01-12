import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const RTL: React.FC = (props) => {
    return (
        <StylesProvider jss={jss}>
            {props.children}
        </StylesProvider>
    )
}

export default RTL
