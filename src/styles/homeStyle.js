import {
    StyleSheet,

} from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../helpers/Responsive';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    toolBar: {
        alignItems: 'center',
        width: responsiveWidth(100),
        paddingTop: responsiveWidth(5),
        paddingBottom: responsiveWidth(5),
        marginBottom: responsiveWidth(5),
        //justifyContent:'center'
        borderWidth: 0,
        borderRadius: 0,
        borderColor: '#ddd',
        //borderBottomWidth: 0,
        shadowColor: '#ddd',
        // shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 1,
        backgroundColor: '#b30059',
        color: 'white'

    },
    contentContainer: {
        //borderColor: '#DD0000',borderWidth:2,
        flex: 1,
        width: responsiveWidth(90),
        // backgroundColor:'#b30059'


    },

    itemContainer: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#b30059',
        //borderBottomWidth: 0,
        shadowColor: '#b30059',
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1.0,
        shadowRadius: 5,
        elevation: 1,
        justifyContent: 'center',
        marginBottom: responsiveWidth(5),
    },

    itemData: {
        padding: responsiveWidth(4),
        //justifyContent: 'center',
        flex: 1,
        //borderColor: '#dd0000', borderWidth: 2,
    },
    newsHeading: {
        fontSize: responsiveFontSize(2.8),
        color: '#000'
    },
    itemContentContainer: {
        flexDirection: 'row',
        padding: responsiveWidth(4),
        alignItems: 'center',
    },
    toolBarHeading: {
        color: '#fff'
    },
    text: {
        margin: 19,
        fontSize: 22,
    },
    image: {
        width: 400,
        height: 400,
    },


})

export default styles;