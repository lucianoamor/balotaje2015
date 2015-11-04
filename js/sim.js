$(document).ready(function() {

    var iniDS = 0,
        iniMM = 1,
        iniBL = 0,
        ini   = .5,
        steps = 101;

    var votos = {
        'DS': 9338449,
        'MM': 8601063,
        'SM': 5386965,
        'DC': 812530,
        'MS': 632551,
        'RS': 412577
    };

    var sliderDS = new Dragdealer('sliderDS', {
        steps: steps,
        x: iniDS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDS_B = new Dragdealer('sliderDS_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderDS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM = new Dragdealer('sliderMM', {
        steps: steps,
        x: iniMM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM_B = new Dragdealer('sliderMM_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderMM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM = new Dragdealer('sliderSM', {
        steps: steps,
        x: ini,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM_B = new Dragdealer('sliderSM_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderSM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC = new Dragdealer('sliderDC', {
        steps: steps,
        x: ini,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC_B = new Dragdealer('sliderDC_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderDC_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS = new Dragdealer('sliderMS', {
        steps: steps,
        x: ini,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS_B = new Dragdealer('sliderMS_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderMS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS = new Dragdealer('sliderRS', {
        steps: steps,
        x: ini,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS_B = new Dragdealer('sliderRS_B', {
        steps: steps,
        x: iniBL,
        animationCallback: function(x, y) {
            $('#sliderRS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliders = {
        'DS': sliderDS,
        'MM': sliderMM,
        'SM': sliderSM,
        'DC': sliderDC,
        'MS': sliderMS,
        'RS': sliderRS,
        'DSB': sliderDS_B,
        'MMB': sliderMM_B,
        'SMB': sliderSM_B,
        'DCB': sliderDC_B,
        'MSB': sliderMS_B,
        'RSB': sliderRS_B
    };

    // ini
    actualizar(iniDS, sliderDS);
    actualizar(iniMM, sliderMM);
    actualizar(ini, sliderSM);
    actualizar(ini, sliderDC);
    actualizar(ini, sliderMS);
    actualizar(ini, sliderRS);
    resultado(sliders, votos);

});

function actualizar(v, slider) {
    var wrapper = $(slider.wrapper),
        div = wrapper.parents('.candidato'),
        val = Math.round(v*100);
    // indicador
    var indDS = div.find('.indicador.DS'),
        indMM = div.find('.indicador.MM');
    indDS.css('opacity', 1-val/100);
    indMM.css('opacity', val/100);
    // valor
    var valDS = div.find('.valor.DS'),
        valMM = div.find('.valor.MM');
    valDS.html(100-val+"%");
    valMM.html(val+"%");
}

function resultado(sliders, votos) {
    var vDS = sliders.DS.getValue()[0],
        vMM = sliders.MM.getValue()[0],
        vSM = sliders.SM.getValue()[0],
        vDC = sliders.DC.getValue()[0],
        vMS = sliders.MS.getValue()[0],
        vRS = sliders.RS.getValue()[0],
        bDS = sliders.DSB.getValue()[0],
        bMM = sliders.MMB.getValue()[0],
        bSM = sliders.SMB.getValue()[0],
        bDC = sliders.DCB.getValue()[0],
        bMS = sliders.MSB.getValue()[0],
        bRS = sliders.RSB.getValue()[0];

    var tDS;
    tDS = votos.DS - (votos.DS * bDS);
    tDS *= 1 - vDS;

    var tMM;
    tMM = votos.MM - (votos.MM * bMM);
    tMM *= vMM;


    var tSM;
    tSM = votos.SM - (votos.SM * bSM);
    tDS += tSM * (1 - vSM);
    tMM += tSM * vSM;

    var tDC;
    tDC = votos.DC - (votos.DC * bDC);
    tDS += tDC * (1 - vDC);
    tMM += tDC * vDC;

    var tMS;
    tMS = votos.MS - (votos.MS * bMS);
    tDS += tMS * (1 - vMS);
    tMM += tMS * vMS;

    var tRS;
    tRS = votos.RS - (votos.RS * bRS);
    tDS += tRS * (1 - vRS);
    tMM += tRS * vRS;

    var total = tDS + tMM,
        pDS = tDS / total * 100,
        pMM = tMM / total * 100;

    var divDS = $('.resultados').find('.valor.DS'),
        divMM = $('.resultados').find('.valor.MM');

    $('.resultados').find('.valor.DS').text(pDS.toFixed(2) + '%');
    $('.resultados').find('.valor.MM').text(pMM.toFixed(2) + '%');

    if(pDS !== 50) {
        if(pDS > 50) {
            divDS.css('font-weight', 'bold');
            divMM.css('font-weight', 'normal');
            divDS.siblings('h2').css('font-weight', 'bold');
            divMM.siblings('h2').css('font-weight', 'normal');
            divDS.parent().siblings('.glyphicon').removeClass('glyphicon-hand-right').addClass('glyphicon-hand-left');
        } else {
            divDS.css('font-weight', 'normal');
            divMM.css('font-weight', 'bold');
            divDS.siblings('h2').css('font-weight', 'normal');
            divMM.siblings('h2').css('font-weight', 'bold');
            divMM.parent().siblings('.glyphicon').removeClass('glyphicon-hand-left').addClass('glyphicon-hand-right');
        }
    }

}