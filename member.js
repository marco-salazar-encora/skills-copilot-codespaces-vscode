function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    template: '<h3>{{member.name}}</h3>' +
    '<h4>{{member.position}}</h4>' +
    '<p>{{member.description}}</p>' +
    '<h5>Skills</h5>' +
    '<ul>' +
    '<li ng-repeat="skill in member.skills">{{skill}}</li>' +
    '</ul>'
  };
}