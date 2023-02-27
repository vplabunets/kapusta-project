

  const changeMonth = month => {
    let result = '';
    switch (month) {
      case 'January':
      result = 'January';
      break;

      case 'February':
      result = 'February';
      break;

      case 'March':
      result = 'March';
      break;

      case 'April':
      result = 'April';
      break;

      case 'May':
      result = 'May';
      break;

      case 'June':
      result = 'June';
      break;

      case 'July':
      result = 'July';
      break;

      case 'August':
      result = 'August';
      break;

      case 'September':
      result = 'September';
      break;

      case 'October':
      result = 'October';
      break;

      case 'November':
      result = 'November';
      break;

      case 'December':
      result = 'December';
      break;

      default:
        break;
    }
    return result;
  };

  export default changeMonth;