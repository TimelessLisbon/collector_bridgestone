gdjs.S_46_32Carlos_32FimCode = {};
gdjs.S_46_32Carlos_32FimCode.localVariables = [];
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final = [];

gdjs.S_46_32Carlos_32FimCode.GDokObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDokObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDokObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDURLObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDURLObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDURLObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects3= [];
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects1= [];
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects2= [];
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects3= [];


gdjs.S_46_32Carlos_32FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20111820);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
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


};gdjs.S_46_32Carlos_32FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20125692);
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1 */
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[0].getText()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Carlos_32FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20127492);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Carlos_32FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20131524);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Carlos_32FimCode.eventsList4 = function(runtimeScene) {

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
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20133220);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Carlos_32FimCode.eventsList5 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(36);
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1[i].setString("Percurso Belas Artes");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("answer").setString("COMPREENDIDO");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("answer").setString("UNDERSTOOD");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("answer").setString("CROISÉS");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("answer").setString("CRUCIGRAMAS");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Carlos_32FimCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scene_start");
}
{ //Subevents
gdjs.S_46_32Carlos_32FimCode.eventsList0(runtimeScene);} //End of subevents
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
}{gdjs.evtTools.firebaseTools.database.getField("Voucher", "Status", runtimeScene.getScene().getVariables().get("voucher"), runtimeScene.getScene().getVariables().get("error"));
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


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setText(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].getText())));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setPlaceholder("TOQUE PARA INSERIR");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setPlaceholder("TOUCH TO ADD");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setPlaceholder("TAP POUR INSERER");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setPlaceholder("PULSE PARA INSERTAR");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Carlos_32FimCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Carlos_32FimCode.GDokObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].getText() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}
{ //Subevents
gdjs.S_46_32Carlos_32FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setText("");
}
}
{ //Subevents
gdjs.S_46_32Carlos_32FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Carlos_32FimCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1);
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Carlos_32FimCode.GDokObjects1[k] = gdjs.S_46_32Carlos_32FimCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[k] = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final.push(gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[i].getText() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) + " " ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[k] = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final.push(gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1_1final, gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Carlos_32FimCode.eventsList3(runtimeScene);} //End of subevents
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
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.S_46_32Carlos_32FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Carlos_32FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDokObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDokObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects3.length = 0;

gdjs.S_46_32Carlos_32FimCode.eventsList5(runtimeScene);
gdjs.S_46_32Carlos_32FimCode.GDokObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDokObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDokObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDwrongObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDnext_9595sceneObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDURLObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDfundopistagmObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDpistagmObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDdigitsObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDlocal_9595erradoObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDtask_9595confirmationObjects3.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects1.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects2.length = 0;
gdjs.S_46_32Carlos_32FimCode.GDgmapsObjects3.length = 0;


return;

}

gdjs['S_46_32Carlos_32FimCode'] = gdjs.S_46_32Carlos_32FimCode;
