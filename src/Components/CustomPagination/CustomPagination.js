// material-ui
// styles
import {SetFlex} from './Styles';
import {StyledPagination} from './Styles'


const CustomPagination = ({count, page, setPage}) => {
    //const data = props.result;
    const handleChange = (e, value) => {
      window.scroll(0,0)
      setPage(value);
      window.scroll(0,0);
    }
    return (
            <SetFlex>
              <StyledPagination
                count={count} color='primary'
                page={page}
                onChange={handleChange}
                size='small'
              />
            </SetFlex>
    );
  }
  
  export default CustomPagination;
  