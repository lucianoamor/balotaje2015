$(document).ready(function() {

    var data = {vDS: 0,
                vMM: 1,
                vSM:.5,
                vDC:.5,
                vMS:.5,
                vRS:.5,
                bDS:0,
                bMM:0,
                bSM:0,
                bDC:0,
                bMS:0,
                bRS:0}

    $.extend(true, data, $.deparam(location.search.substring(1, location.search.length -1)));

    var ini   = .5,
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
        x: data.vDS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDS_B = new Dragdealer('sliderDS_B', {
        steps: steps,
        x: data.bDS,
        animationCallback: function(x, y) {
            $('#sliderDS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM = new Dragdealer('sliderMM', {
        steps: steps,
        x: data.vMM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM_B = new Dragdealer('sliderMM_B', {
        steps: steps,
        x: data.bMM,
        animationCallback: function(x, y) {
            $('#sliderMM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM = new Dragdealer('sliderSM', {
        steps: steps,
        x: data.vSM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM_B = new Dragdealer('sliderSM_B', {
        steps: steps,
        x: data.bSM,
        animationCallback: function(x, y) {
            $('#sliderSM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC = new Dragdealer('sliderDC', {
        steps: steps,
        x: data.vDC,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC_B = new Dragdealer('sliderDC_B', {
        steps: steps,
        x: data.bDC,
        animationCallback: function(x, y) {
            $('#sliderDC_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS = new Dragdealer('sliderMS', {
        steps: steps,
        x: data.vMS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS_B = new Dragdealer('sliderMS_B', {
        steps: steps,
        x: data.bMS,
        animationCallback: function(x, y) {
            $('#sliderMS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS = new Dragdealer('sliderRS', {
        steps: steps,
        x: data.vRS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS_B = new Dragdealer('sliderRS_B', {
        steps: steps,
        x: data.bRS,
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


    var data = {vDS: sliders.DS.getValue()[0],
                vMM:sliders.MM.getValue()[0],
                vSM:sliders.SM.getValue()[0],
                vDC:sliders.DC.getValue()[0],
                vMS:sliders.MS.getValue()[0],
                vRS:sliders.RS.getValue()[0],
                bDS:sliders.DSB.getValue()[0],
                bMM:sliders.MMB.getValue()[0],
                bSM:sliders.SMB.getValue()[0],
                bDC:sliders.DCB.getValue()[0],
                bMS:sliders.MSB.getValue()[0],
                bRS:sliders.RSB.getValue()[0]}
    history.replaceState(null, null, '?' + $.param(data));

    var tDS;
    tDS = votos.DS - (votos.DS * parseFloat(data.bDS));
    tDS *= 1 - parseFloat(data.vDS);

    var tMM;
    tMM = votos.MM - (votos.MM * parseFloat(data.bMM));
    tMM *= parseFloat(data.vMM);


    var tSM;
    tSM = votos.SM - (votos.SM * parseFloat(data.bSM));
    tDS += tSM * (1 - parseFloat(data.vSM));
    tMM += tSM * parseFloat(data.vSM);

    var tDC;
    tDC = votos.DC - (votos.DC * parseFloat(data.bDC));
    tDS += tDC * (1 - parseFloat(data.vDC));
    tMM += tDC * parseFloat(data.vDC);

    var tMS;
    tMS = votos.MS - (votos.MS * parseFloat(data.bMS));
    tDS += tMS * (1 - parseFloat(data.vMS));
    tMM += tMS * parseFloat(data.vMS);

    var tRS;
    tRS = votos.RS - (votos.RS * parseFloat(data.bRS));
    tDS += tRS * (1 - parseFloat(data.vRS));
    tMM += tRS * parseFloat(data.vRS);

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