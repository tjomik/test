

function function_for_61(){
    $.ajax({
        url:ShowPoint(61),
        success: function(){
            eval('DATA.s61=-1');
            AddSectionXML(61,0, false);
            doEvalScript(61);
            Ev(0);
        }})}

function function_for_82(){
    $.ajax({
        url:ShowPoint(82),
        success: function(){
            eval('DATA.s82=2');
            AddSectionXML(82,1,false);
            doEvalScript(82);
            Ev(1);
            function_for_61();
        }
    })}

function function_for_81(){
    $.ajax({
        url:ShowPoint(81),
        success: function(){
            eval('DATA.s81=2');
            AddSectionXML(81,1,false);
            doEvalScript(81);
            Ev(1);
            function_for_82();
        }
    })}

function function_for_54(){
    $.ajax({
        url:ShowPoint(54),
        success: function(){
            eval('DATA.s54=2');
            AddSectionXML(54,1,false);
            doEvalScript(54);
            Ev(1);
            function_for_81();
        }
    })}

function function_for_78(){
    $.ajax({
        url:ShowPoint(78),
        success: function(){
            eval('DATA.s78=-1'); AddSectionXML(78,0, false); doEvalScript(78);Ev(0);
            function_for_54();
        }
    })}





