$(document).ready(function() {

    var ini = {
            DS: 0,
            MM: 1,
            SM: .5,
            DC: .5,
            MS: .5,
            RS: .5,
            DSB: 0,
            MMB: 0,
            SMB: 0,
            DCB: 0,
            MSB: 0,
            RSB: 0
        },
        steps = 101,
        votos = {
            DS: 9338449,
            MM: 8601063,
            SM: 5386965,
            DC: 812530,
            MS: 632551,
            RS: 412577
        },
        get = $.deparam(location.search.substring(1));

    // valida input
    Object.keys(get).map(function(v) {
        if(v < 0 || v > 1) {
            get[v] = null;
        }
    });
    $.extend(true, ini, get);

    history.replaceState({}, '', location.protocol + '//' + location.host + location.pathname);

    var sliderDS = new Dragdealer('sliderDS', {
        steps: steps,
        x: ini.DS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDS_B = new Dragdealer('sliderDS_B', {
        steps: steps,
        x: ini.DSB,
        animationCallback: function(x, y) {
            $('#sliderDS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM = new Dragdealer('sliderMM', {
        steps: steps,
        x: ini.MM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMM_B = new Dragdealer('sliderMM_B', {
        steps: steps,
        x: ini.MMB,
        animationCallback: function(x, y) {
            $('#sliderMM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM = new Dragdealer('sliderSM', {
        steps: steps,
        x: ini.SM,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderSM_B = new Dragdealer('sliderSM_B', {
        steps: steps,
        x: ini.SMB,
        animationCallback: function(x, y) {
            $('#sliderSM_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC = new Dragdealer('sliderDC', {
        steps: steps,
        x: ini.DC,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderDC_B = new Dragdealer('sliderDC_B', {
        steps: steps,
        x: ini.DCB,
        animationCallback: function(x, y) {
            $('#sliderDC_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS = new Dragdealer('sliderMS', {
        steps: steps,
        x: ini.MS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderMS_B = new Dragdealer('sliderMS_B', {
        steps: steps,
        x: ini.MSB,
        animationCallback: function(x, y) {
            $('#sliderMS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS = new Dragdealer('sliderRS', {
        steps: steps,
        x: ini.RS,
        animationCallback: function(x, y) {
            actualizar(x, this);
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliderRS_B = new Dragdealer('sliderRS_B', {
        steps: steps,
        x: ini.RSB,
        animationCallback: function(x, y) {
            $('#sliderRS_B .valorB').text(Math.round(x * 100)+' %');
        },
        dragStopCallback: function(x, y) {
            resultado(sliders, votos);
        }
    });

    var sliders = {
        DS: sliderDS,
        MM: sliderMM,
        SM: sliderSM,
        DC: sliderDC,
        MS: sliderMS,
        RS: sliderRS,
        DSB: sliderDS_B,
        MMB: sliderMM_B,
        SMB: sliderSM_B,
        DCB: sliderDC_B,
        MSB: sliderMS_B,
        RSB: sliderRS_B
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
    indDS.css('opacity', 1 - val / 100);
    indMM.css('opacity', val / 100);
    // valor
    var valDS = div.find('.valor.DS'),
        valMM = div.find('.valor.MM');
    valDS.html(100 - val + "%");
    valMM.html(val + "%");
}

function resultado(sliders, votos) {
    var sliderVal = {
        DS: sliders.DS.getValue()[0],
        MM: sliders.MM.getValue()[0],
        SM: sliders.SM.getValue()[0],
        DC: sliders.DC.getValue()[0],
        MS: sliders.MS.getValue()[0],
        RS: sliders.RS.getValue()[0],
        DSB: sliders.DSB.getValue()[0],
        MMB: sliders.MMB.getValue()[0],
        SMB: sliders.SMB.getValue()[0],
        DCB: sliders.DCB.getValue()[0],
        MSB: sliders.MSB.getValue()[0],
        RSB: sliders.RSB.getValue()[0]
    };

    var tDS0;
    tDS0 = votos.DS - (votos.DS * sliderVal.DSB);

    var tMM0;
    tMM0 = votos.MM - (votos.MM * sliderVal.MMB);

    var tDS = 0;
    tDS += tDS0 * (1 - sliderVal.DS);
    tDS += tMM0 * (1 - sliderVal.MM);

    var tMM = 0;
    tMM += tMM0 * sliderVal.MM;
    tMM += tDS0 * sliderVal.DS;

    var tSM;
    tSM = votos.SM - (votos.SM * sliderVal.SMB);
    tDS += tSM * (1 - sliderVal.SM);
    tMM += tSM * sliderVal.SM;

    var tDC;
    tDC = votos.DC - (votos.DC * sliderVal.DCB);
    tDS += tDC * (1 - sliderVal.DC);
    tMM += tDC * sliderVal.DC;

    var tMS;
    tMS = votos.MS - (votos.MS * sliderVal.MSB);
    tDS += tMS * (1 - sliderVal.MS);
    tMM += tMS * sliderVal.MS;

    var tRS;
    tRS = votos.RS - (votos.RS * sliderVal.RSB);
    tDS += tRS * (1 - sliderVal.RS);
    tMM += tRS * sliderVal.RS;

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

    $('.texto code span').text($.param(sliderVal));

}