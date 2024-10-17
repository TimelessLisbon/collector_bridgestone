gdjs.Sta_32CatarinaCode = {};
gdjs.Sta_32CatarinaCode.localVariables = [];
gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final = [];

gdjs.Sta_32CatarinaCode.GDclueObjects1_1final = [];

gdjs.Sta_32CatarinaCode.GDokObjects1= [];
gdjs.Sta_32CatarinaCode.GDokObjects2= [];
gdjs.Sta_32CatarinaCode.GDokObjects3= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects1= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects2= [];
gdjs.Sta_32CatarinaCode.GDfundoObjects3= [];
gdjs.Sta_32CatarinaCode.GDclueObjects1= [];
gdjs.Sta_32CatarinaCode.GDclueObjects2= [];
gdjs.Sta_32CatarinaCode.GDclueObjects3= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects1= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects2= [];
gdjs.Sta_32CatarinaCode.GDanswerObjects3= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects1= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects2= [];
gdjs.Sta_32CatarinaCode.GDscoreObjects3= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2= [];
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3= [];
gdjs.Sta_32CatarinaCode.GDURLObjects1= [];
gdjs.Sta_32CatarinaCode.GDURLObjects2= [];
gdjs.Sta_32CatarinaCode.GDURLObjects3= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2= [];
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects1= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects2= [];
gdjs.Sta_32CatarinaCode.GDpistagmObjects3= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects1= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects2= [];
gdjs.Sta_32CatarinaCode.GDdigitsObjects3= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2= [];
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2= [];
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects1= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects2= [];
gdjs.Sta_32CatarinaCode.GDgmapsObjects3= [];


gdjs.Sta_32CatarinaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20050500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20070884);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1, gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Sta_32CatarinaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.Sta_32CatarinaCode.GDanswerObjects2[0].getText()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20071900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.asyncCallback20075500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects3);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects3.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects3[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Sta_32CatarinaCode.localVariables.length = 0;
}
gdjs.Sta_32CatarinaCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
for (const obj of gdjs.Sta_32CatarinaCode.GDanswerObjects2) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Sta_32CatarinaCode.asyncCallback20075500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Sta_32CatarinaCode.asyncCallback20076828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}gdjs.Sta_32CatarinaCode.localVariables.length = 0;
}
gdjs.Sta_32CatarinaCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Sta_32CatarinaCode.localVariables);
for (const obj of gdjs.Sta_32CatarinaCode.GDanswerObjects1) asyncObjectsList.addObject("answer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Sta_32CatarinaCode.asyncCallback20076828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Sta_32CatarinaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20073844);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("INCORRECTO");
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("INCORRECT");
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Sta_32CatarinaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20079636);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20081596);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20083556);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20085356);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20088692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20088540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20093876);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1, gdjs.Sta_32CatarinaCode.GDanswerObjects2);

{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].setText("CORRECTO");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32CatarinaCode.GDanswerObjects1 */
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("CORRECT");
}
}}

}


};gdjs.Sta_32CatarinaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20098028);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20101996);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(15 - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 3);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20103220);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(0);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20099300);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) < 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) != "4a6bed99-f0a7-4a39-a974-6a4e0dceeae5";
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20145596);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.Sta_32CatarinaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20151228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32CatarinaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20153340);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "LIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


};gdjs.Sta_32CatarinaCode.eventsList19 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(29);
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1[i].setString("Sta Catarina Fim");
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setString("DRAMA");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TimeClue");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Language", runtimeScene.getScene().getVariables().get("language"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scene_start") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("language")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32CatarinaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Sta_32CatarinaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText())));
}
}}

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("digits")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[k] = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length;i<l;++i) {
    if ( !((gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)))) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects1[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TimeClue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "TimeClue");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 5;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 7;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 4);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].setAnimation(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) + 8);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDclueObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects2[k] = gdjs.Sta_32CatarinaCode.GDclueObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDclueObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDclueObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDclueObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDclueObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDclueObjects1_1final, gdjs.Sta_32CatarinaCode.GDclueObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "digits") > 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].setText("");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("digits"), gdjs.Sta_32CatarinaCode.GDdigitsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDdigitsObjects1[k] = gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDdigitsObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "digits");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "digits");
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDdigitsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("digits").setNumber(0);
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32CatarinaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32CatarinaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDclueObjects1[k] = gdjs.Sta_32CatarinaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + " " ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length;i<l;++i) {
    if ( (gdjs.Sta_32CatarinaCode.GDanswerObjects2[i].getText()).includes(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0))) ) {
        isConditionTrue_1 = true;
        gdjs.Sta_32CatarinaCode.GDanswerObjects2[k] = gdjs.Sta_32CatarinaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Sta_32CatarinaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.indexOf(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final.push(gdjs.Sta_32CatarinaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Sta_32CatarinaCode.GDanswerObjects1_1final, gdjs.Sta_32CatarinaCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TimeClue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "TimeClue");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "ClueGM", runtimeScene.getScene().getVariables().get("clueGM"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")) != "";
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(1);
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EstadoClueGM", "RECEBIDA", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cluegiven")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("clueGM")));
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setWrappingWidth(535);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].setY(575 - (gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].getHeight()) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundopistagm"), gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32CatarinaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[k] = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32CatarinaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32CatarinaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32CatarinaCode.GDokObjects1[k] = gdjs.Sta_32CatarinaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32CatarinaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32CatarinaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1 */
gdjs.copyArray(runtimeScene.getObjects("pistagm"), gdjs.Sta_32CatarinaCode.GDpistagmObjects1);
{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDpistagmObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32CatarinaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32CatarinaCode.GDanswerObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("clueGM").setString("");
}{runtimeScene.getScene().getVariables().get("cluegiven").setNumber(0);
}
{ //Subevents
gdjs.Sta_32CatarinaCode.eventsList18(runtimeScene);} //End of subevents
}

}


};

gdjs.Sta_32CatarinaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sta_32CatarinaCode.GDokObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects3.length = 0;

gdjs.Sta_32CatarinaCode.eventsList19(runtimeScene);
gdjs.Sta_32CatarinaCode.GDokObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDokObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDclueObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDanswerObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDscoreObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDnext_9595sceneObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDURLObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDfundopistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDpistagmObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDdigitsObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects1.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects2.length = 0;
gdjs.Sta_32CatarinaCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['Sta_32CatarinaCode'] = gdjs.Sta_32CatarinaCode;
