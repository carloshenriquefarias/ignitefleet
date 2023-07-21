import 'styled-components';
import theme from '../theme';

declare module 'styled-components'{
    type ThemeType = typeof theme;

    export interface DefatultTheme extends ThemeType {}
}
