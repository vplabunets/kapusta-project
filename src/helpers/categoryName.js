const categoryName = (categories) => {
    let result = '';
    switch (categories) {
      case 'Products':
        result = 'Products'        
        break;

        case 'Health':
        result = 'Health'
        break;
      
        case 'Alcohol':
        result = 'Alcohol'
        break;

        case 'Entertainment':
        result = 'Entertainment'       
        break;

        case 'Housing':
        result = 'Housing'       
        break;

        case 'Communal, communication':
        result = 'Communal, communication'       
        break;

        case 'Sports, hobbies':
        result = 'Sports, hobbies'      
        break;

        case 'Education':
        result = 'Education'       
        break;

        case 'Other':
        result = 'Other'       
        break;

        case 'Salary':
        result = 'Salary'       
        break;

        case 'Add.income':
        result = 'Add.income'       
        break;
    
      default:
        break;
    }
    return result;
  }

  export default categoryName;