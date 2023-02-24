import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    isLoading,
  };
};
