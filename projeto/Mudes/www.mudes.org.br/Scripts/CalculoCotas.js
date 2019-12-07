$(document).ready(function () {
    $('input').change(function () {
        if ($(this).val() == "") {
            $(this).val(0);
        }

        var totalExclusao = parseInt($('#exclusaoFormacao').val()) + parseInt($('#exclusaoDirecao').val()) + parseInt($('#exclusaoTemporario').val()) + parseInt($('#exclusaoAprendizes').val());
        var saldo = parseInt($('#qtdEmpregados').val()) - totalExclusao;
        if (saldo < 0) {
            saldo = 0;
        }
        var cotaMinima = saldo * 0.05;
        var cotaMaxima = saldo * 0.15;

        $("#TotalExclusao").text(totalExclusao);
        $("#Saldo").text(saldo);
        $("#CotaMinima").text(cotaMinima.toFixed(1));
        $("#CotaMaxima").text(cotaMaxima.toFixed(1));
    });
});