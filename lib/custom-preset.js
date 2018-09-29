const angularChangeLog = require("conventional-changelog-angular");

// Note: The changelog defined here is dependent on the angular changelog. Any updates
// to the angular changelog could require the below code to change.
const adjustedChangeLog = angularChangeLog.then(changeLog => {
  changeLog.parserOpts.headerPattern = /^(?:\w+-\d+\s*-?\s*)?(\w*)(?:\((.*)\))?: (.*)$/;
  return changeLog;
});

module.exports = adjustedChangeLog;
