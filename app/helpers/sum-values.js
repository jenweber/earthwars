// function to add up a user's score
import Ember from 'ember';

// If there are no activities, set the value to zero. Prevents errors thrown by calling reduce on [].
// Otherwise, sum the value attribute of all the user's activivies
export function sumValues(params) {
  if (params[0].map((activity) => Number(activity.get('value'))).length === "0") {
    return 0;
  } else {
  return params[0].map((activity) => Number(activity.get('value'))).reduce((a,b)=> a + b);
  }
}


export default Ember.Helper.helper(sumValues);
