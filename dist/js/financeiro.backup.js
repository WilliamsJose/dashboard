/* GridStack */
$(function () {
   var options = {
      float: true,
      draggable: {
         handle: '.box-header'
      }
   }; 
   $('.grid-stack').gridstack(options);

   new function () { 
      this.items = [];

      this.grid = $('.grid-stack').data('gridstack');

      var i = 0;

      this.addNewWidget = function () {
         var widg = this.items.pop() || {
            x: 0,
            y: 0,
            width: 6,
            height: 6,
         }; 
         
         this.grid.addWidget($('<div><div class="grid-stack-item-content" style="border-radius:3px;">' +
                                 '<div id="canvas-holder' + i + '" style="width:100%;height:100%;overflow:hidden;">' +
                                    '<div class="box">' +

                                       '<div class="box-header with-border">' +
                                       '<h3 class="box-title" id="box-title' + i + '">Turnover ( Admissões vs Demissões )</h3>' +
                                       '<div class="change-title" id="change-title' + i + '"><button class="btn btn-box-tool" data-toggle="modal" data-target="#title-box"><i class="fa fa-pencil-square-o"></i></button></div>' +
                                          '<div class="box-tools pull-right">' +
                                             '<div class="btn-group">' +
                                                '<button class="btn btn-box-tool gcf" data-toggle="collapse" data-target="#prefer' + i + '"><i class="fa fa-gear"></i></button>' +
                                                '<ul class="collapse prefer" id="prefer' + i + '" role="menu">' +
                                                   '<li type="button" data-toggle="collapse" data-target="#graphs' + i + '"><a>Gráficos</a></li>' +
                                                   '<ul class="collapse" id="graphs' + i + '">' +
                                                      '<select class="ss" id="select-graph' + i + '">' +
                                                         '<option value="bar">Barra</option>' +
                                                         '<option value="doughnut">Rosca</option>' +
                                                         '<option value="line">Linha</option>' +
                                                         '<option value="radar">Radar</option>' +
                                                         '<option value="pie">Pizza</option>' +
                                                         '<option value="barLine">Barra e Linha</option>' +
                                                      '</select>' +
                                                   '</ul>' +

                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-colors' + i + '"><a>Cores</a></li>' +
                                                   '<ul class="collapse" id="graphs-colors' + i + '">' +
                                                      '<li class="legends"><label for="change-admitted-color' + i + '" class="btn btn-xs btn-info lb" id="admitted-color' + i + '">Admitidos</label></li>' +
                                                      '<input type="color" id="change-admitted-color' + i + '" class="inn" style="display:none">' +

                                                      '<li class="legends"><label for="change-dismissed-color' + i + '" class="btn btn-xs btn-info lb" id="dismissed-color' + i + '">Demitidos</label></li>' +
                                                      '<input type="color" id="change-dismissed-color' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-a' + i + '" class="btn btn-xs btn-info lb" id="color-a' + i + '">Janeiro</label></li>' +
                                                      '<input type="color" id="change-color-a' + i + '" class="inn" style="display:none">' +
                                                      
                                                      '<li class="months"><label for="change-color-b' + i + '" class="btn btn-xs btn-info lb" id="color-b' + i + '">Fevereiro</label></li>' +
                                                      '<input type="color" id="change-color-b' + i + '" class="inn" style="display:none">' +
                                                      
                                                      '<li class="months"><label for="change-color-c' + i + '" class="btn btn-xs btn-info lb" id="color-c' + i + '">Março</label></li>' +
                                                      '<input type="color" id="change-color-c' + i + '" class="inn" style="display:none">' +
                                                      
                                                      '<li class="months"><label for="change-color-d' + i + '" class="btn btn-xs btn-info lb" id="color-d' + i + '">Abril</label></li>' +
                                                      '<input type="color" id="change-color-d' + i + '" class="inn" style="display:none">' +
                                                      
                                                      '<li class="months"><label for="change-color-e' + i + '" class="btn btn-xs btn-info lb" id="color-e' + i + '">Maio</label></li>' +
                                                      '<input type="color" id="change-color-e' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-f' + i + '" class="btn btn-xs btn-info lb" id="color-f' + i + '">Junho</label></li>' +
                                                      '<input type="color" id="change-color-f' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-g' + i + '" class="btn btn-xs btn-info lb" id="color-g' + i + '">Julho</label></li>' +
                                                      '<input type="color" id="change-color-g' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-h' + i + '" class="btn btn-xs btn-info lb" id="color-h' + i + '">Agosto</label></li>' +
                                                      '<input type="color" id="change-color-h' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-i' + i + '" class="btn btn-xs btn-info lb" id="color-i' + i + '">Setembro</label></li>' +
                                                      '<input type="color" id="change-color-i' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-j' + i + '" class="btn btn-xs btn-info lb" id="color-j' + i + '">Outubro</label></li>' +
                                                      '<input type="color" id="change-color-j' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-k' + i + '" class="btn btn-xs btn-info lb" id="color-k' + i + '">Novembro</label></li>' +
                                                      '<input type="color" id="change-color-k' + i + '" class="inn" style="display:none">' +

                                                      '<li class="months"><label for="change-color-l' + i + '" class="btn btn-xs btn-info lb" id="color-l' + i + '">Dezembro</label></li>' +
                                                      '<input type="color" id="change-color-l' + i + '" class="inn" style="display:none">' +
                                                   '</ul>' +

                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-grids' + i + '"><a>Grids</a></li>' +
                                                   '<ul class="collapse" id="graphs-grids' + i + '">' +
                                                      '<label class="gls" for="#grids-yes-no' + i + '">Habilitar Grids</label>' +
                                                      '<select name="grids-yes-no" class="ss" id="grids-yes-no' + i + '">' +
                                                         '<option value="0">Sim</option>' +
                                                         '<option value="1">Não</option>' +
                                                      '</select>' +
                                                   '</ul>' +
                                                   
                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-labels' + i + '"><a>Labels</a></li>' +
                                                   '<ul class="collapse" id="graphs-labels' + i + '">' +
                                                      '<label class="gls" for="#labels-yes-no' + i + '">Habilitar Labels</label>' +
                                                      '<select name="labels-yes-no" class="ss" id="labels-yes-no' + i + '">' +
                                                         '<option value="0">Sim</option>' +
                                                         '<option value="1">Não</option>' +
                                                      '</select>' +
                                                   '</ul>' +
                                                '</ul>' +
                                             '</div>' +
                                             '<button class="btn btn-box-tool"><i class="fa fa-filter"></i></button>' +
                                             '<button class="btn btn-box-tool" type="button" data-widget="remove"><i class="fa fa-times Close"></i></button>' +
                                          '</div>' +
                                       '</div>' +
                                       /* /.box-header */

                                       '<div class="box-body">' +
                                          '<button id="changeDoughnut' + i + '" class="btn btn-xs btn-primary changeDoughnut">Meia Rosca</button>' +
                                          '<div style="width:100%;height:100%;">' +
                                             '<canvas id="chart-area' + i + '" style="width:100%;height:100%">Seu Browser não suporta o canvas, por favor utilize o <a href="https://www.google.com/chrome/">Chrome</a></canvas>' +
                                          '</div>' +
                                          /* /.row */
                                       '</div>' +
                                       /* ./box-body */

                                       '<div class="box-footer">' +
                                          '<div class="row">' +
                                             '<div>Última atualização: 05/12/2018 18:20</div>' +
                                          '</div>' +
                                          /* /.row */
                                       '</div>' +
                                       /* /.box-footer */
                                    '</div>' +
                                    /* /.box */
                                 '</div>' +
                                 '</div></div>'),
         widg.x, widg.y, widg.width, widg.height, true); 
         addWidgetNew(i);
         acc();
         i++;
         return false;
      }.bind(this);
      
      $('#add-new-widget').click(this.addNewWidget);
   };
});
/* /GridStack */

/* Chart JS */
var randomScalingFactor = function() {
   return Math.round(Math.random() * 100);
}; 

var i = 0;

var d1 = 13;
var d2 = 50;
var d3 = 69;
var d4 = 84;
var d5 = 22;

var red = '#FF0000';
var orange = '#FF4500';
var gold = '#FFD700';
var green = '#32CD32';
var blue = '#6A5ACD';
var maroon = '#800000';
var purple = '#800080';
var teal = '#008080';
var gray = '#808080';
var salmon = '#FA8072';
var darkRed = '#8B0000';
var violet = '#EE82EE';

// [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed]


/*
util? do options:
tooltips: {
   callbacks: {
      label: function(tooltipItem, data){
         var label = data.datasets[tooltipItem.datasetIndex].label || '';

         if(label){
            label += ': '
         }

         label = 'R$';
         return label;
      }
   }
}
*/

window.addWidgetNew = function(i) {
   var ctx = document.getElementById('chart-area' + i).getContext('2d');

   // cria novo chart na var tChart
   var tChart = new Chart(ctx, {
      type: 'bar',
      data: {
         labels: [
            "Janeiro/2018",
            "Fevereiro/2018",
            "Março/2018",
            "Abril/2018",
            "Maio/2018",
            "Junho/2018",
            "Julho/2018",
            "Agosto/2018",
            "Setembro/2018",
            "Outubro/2018",
            "Novembro/2018",
            "Dezembro/2018"
         ],

         datasets: [{
            label: 'Admitidos',
            backgroundColor: blue + 'cc',
            hoverBackgroundColor: blue,
            borderColor: blue + 'cc',
            hoverBorderColor: blue,
            data: [
               5,
               29,
               13,
               20,
               15,
               14,
               9,
               29,
               3,
               18,
               3,
               2,
               ],
            }, {
            label: 'Demitidos',
            backgroundColor: red + 'cc',
            hoverBackgroundColor: red,
            borderColor: red + 'cc',
            hoverBorderColor: red,
            data: [
               41,
               10,
               20,
               24,
               11,
               13,
               14,
               6,
               9,
               13,
               9,
               3,
               ],
            }],
      },
         
      options: {
         responsive: true,
         maintainAspectRatio: false,

         legend: {
            position: 'top',
         },

         animation: {
            animateScale: true,
            animateRotate: true
         },
      },
   });

   // chama botao meia rosca
   var halfDonut = document.getElementById('changeDoughnut' + i);
   // chama select de graficos
   var selectGraph = document.getElementById('select-graph' + i);

   // evento do select
   selectGraph.addEventListener('change', graphOption);

   // tipo de grafico escolhido
   function graphOption(){
      'use strict';

      var option = selectGraph.selectedOptions[0].value;

      if(option === 'bar') graphBar();
      if(option === 'doughnut') graphDoughnut();
      if(option === 'line') graphLine();
      if(option === 'radar') graphRadar();
      if(option === 'pie') graphPie();
      // if(option === 'polarArea') graphPolarArea();
      // if(option === 'bubble') graphBubble();
      if(option === 'barLine') graphBarLine();
   };

   // esconder botao meia rosca
   function hideButtonDonut(){
      halfDonut.style.display = 'none';
   };

   // mostrar botao meia rosca
   function showButtonDonut(){
      halfDonut.style.display = 'inline-block';

      halfDonut.addEventListener('click', function() {
         if (tChart.options.circumference === Math.PI) {
            tChart.options.circumference = 2 * Math.PI;
            tChart.options.rotation = -Math.PI / 2;
         } else {
            tChart.options.circumference = Math.PI;
            tChart.options.rotation = -Math.PI;
         }

         tChart.update();
      });
      
      tChart.update();
   };
   
   // mostra botoes meses
   var months = document.getElementsByClassName('months');
   function showMonths(){
      $(legends).css({'display': 'none'});
      $(months).css({'display': 'inline-block'});
   };
   var legends = document.getElementsByClassName('legends');
   // mostra botoes labels
   function showLegends(){
      $(months).css({'display': 'none'});
      $(legends).css({'display': 'inline-block'});
   };

   // barra
   function graphBar(){
      tChart.destroy();
      hideButtonDonut();
      showLegends();
      
      tChart = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: blue + 'cc',
               hoverBackgroundColor: blue,
               borderColor: blue + 'cc',
               hoverBorderColor: blue,
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
                ],
            }, {
               label: 'Demitidos',
               backgroundColor: red + 'cc',
               hoverBackgroundColor: red,
               borderColor: red + 'cc',
               hoverBorderColor: red,
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
                ],
            }],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },
         },
      });

      tChart.update();
   };

   // rosca
   function graphDoughnut(){
      tChart.destroy();
      showMonths();
      
      tChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBorderWidth: 5,
               hoverBorderColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBackgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
               ],
            }, {
               label: 'Demitidos',
               backgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBorderWidth: 5,
               hoverBorderColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBackgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
               ],
            }],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },

            tooltips: {
               callbacks: {
                  label: function(tooltipItem, data){
                     var label = data.datasets[tooltipItem.datasetIndex].label || '';
                     var data = data.datasets[tooltipItem.datasetIndex].data || '';
                     var i = tooltipItem.index;

                     if(label){
                        label += ': '
                     };

                     label = label + data[i];
                     return label;
                  },
               },
            },
         },
      });

      showButtonDonut();
      tChart.update();
   };

   // linha
   function graphLine(){
      tChart.destroy();
      hideButtonDonut();
      showLegends();

      tChart = new Chart(ctx, {
         type: 'line',
         
         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: blue,
               pointStyle: 'circle',
               pointRadius: 5,
               pointHoverRadius: 7,
               fill: false,
               borderColor: blue,
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
               ],
            }, {
               label: 'Demitidos',
               backgroundColor: red,
               pointStyle: 'circle',
               pointRadius: 5,
               pointHoverRadius: 7,
               fill: false,
               borderColor: red,
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
               ],
            }],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },
         },
      });

      tChart.update();
   };

   // radar
   function graphRadar(){
      tChart.destroy();
      hideButtonDonut();
      showLegends();

      tChart = new Chart(ctx, {
         type: 'radar',
         
         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: blue + '99',
               borderColor: blue,
               pointBackgroundColor: blue,
               pointHoverRadius: 5,
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
               ],
            }, {
               label: 'Demitidos',
               backgroundColor: red + 'cc',
               borderColor: red,
               pointBackgroundColor: red,
               pointHoverRadius: 5,
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
               ],
            }],
         },
         
         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },
         },
      });

      tChart.update();
   }

   // pizza
   function graphPie(){
      tChart.destroy();
      showMonths();

      tChart = new Chart(ctx, {
         type: 'pie',
         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBackgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
               ],
            }, {
               label: 'Demitidos',
               backgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               hoverBackgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
               ],
            }],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },

            tooltips: {
               enabled: true,
               callbacks: {
                  label: function(tooltipItem, data){
                     var label = data.datasets[tooltipItem.datasetIndex].label || '';
                     var data = data.datasets[tooltipItem.datasetIndex].data || '';
                     var i = tooltipItem.index;

                     if(label){
                        label += ': '
                     };

                     label = label + data[i];
                     return label;
                  },
               },
            },
         },
      });

      tChart.update();
   };

   // polar area
/*
   function graphPolarArea(){
      tChart.destroy();
      

      tChart = new Chart(ctx, {
         type: 'polarArea',
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },

         options: cOptions,
      });

      tChart.update();
   };
*/

   // barra e linha
   function graphBarLine(){
      tChart.destroy();
      hideButtonDonut();
      showLegends();

      tChart = new Chart(ctx, {
         type: 'bar',

         data: {
            labels: [
               "Janeiro/2018",
               "Fevereiro/2018",
               "Março/2018",
               "Abril/2018",
               "Maio/2018",
               "Junho/2018",
               "Julho/2018",
               "Agosto/2018",
               "Setembro/2018",
               "Outubro/2018",
               "Novembro/2018",
               "Dezembro/2018"
            ],

            datasets: [{
               label: 'Admitidos',
               backgroundColor: blue,
               borderColor: blue,
               fill: false,
               type: 'line',
               data: [
                  5,
                  29,
                  13,
                  20,
                  15,
                  14,
                  9,
                  29,
                  3,
                  18,
                  3,
                  2,
               ],
            }, {
               label: 'Demitidos',
               backgroundColor: red,
               hoverBackgroundColor: [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed],
               data: [
                  41,
                  10,
                  20,
                  24,
                  11,
                  13,
                  14,
                  6,
                  9,
                  13,
                  9,
                  3,
               ],
            }],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
            },

            scales: {
               xAxes: [{
                  gridLines: {
                     display: true,
                  },
               }],
               yAxes: [{
                  gridLines: {
                     display: true,
                  },
               }],
            },
         },
      });

      tChart.update();
   }

   // labels de cores no box
   // var admittedColor = $('#admitted-color' + i);
   // var dismissedColor = $('#dismissed-color' + i);
   // var colorA = $('#color-a' + i);
   // var colorB = $('#color-b' + i);
   // var colorC = $('#color-c' + i);
   // var colorD = $('#color-d' + i);
   // var colorE = $('#color-e' + i);
   // var colorF = $('#color-f' + i);
   // var colorG = $('#color-g' + i);
   // var colorH = $('#color-h' + i);
   // var colorI = $('#color-i' + i);
   // var colorJ = $('#color-j' + i);
   // var colorK = $('#color-k' + i);
   // var colorL = $('#color-l' + i);
   // inputs de cores no box
   // var changeAdmittedColor = $('#change-admitted-color' + i).change(setAdmittedC);
   // var changeDismissedColor = $('#change-dismissed-color' + i).change(setDismissedC);
   // var changeColorA = $('#change-color-a' + i).change(setCA);
   // var changeColorB = $('#change-color-b' + i).change(setCB);
   // var changeColorC = $('#change-color-c' + i).change(setCC);
   // var changeColorD = $('#change-color-d' + i).change(setCD);
   // var changeColorE = $('#change-color-e' + i).change(setCE);
   // var changeColorF = $('#change-color-f' + i).change(setCF);
   // var changeColorG = $('#change-color-g' + i).change(setCG);
   // var changeColorH = $('#change-color-h' + i).change(setCH);
   // var changeColorI = $('#change-color-i' + i).change(setCI);
   // var changeColorJ = $('#change-color-j' + i).change(setCJ);
   // var changeColorK = $('#change-color-k' + i).change(setCK);
   // var changeColorL = $('#change-color-l' + i).change(setCL);
   // funcs
   // function setAdmittedC(){admittedColor[0].style.backgroundColor = changeAdmittedColor[0].value};
   // function setDismissedC(){dismissedColor[0].style.backgroundColor = changeDismissedColor[0].value};
   // function setCA(){colorA[0].style.backgroundColor = changeColorA[0].value};
   // function setCB(){colorB[0].style.backgroundColor = changeColorB[0].value};
   // function setCC(){colorC[0].style.backgroundColor = changeColorC[0].value};
   // function setCD(){colorD[0].style.backgroundColor = changeColorD[0].value};
   // function setCE(){colorE[0].style.backgroundColor = changeColorE[0].value};
   // function setCF(){colorF[0].style.backgroundColor = changeColorF[0].value};
   // function setCG(){colorG[0].style.backgroundColor = changeColorG[0].value};
   // function setCH(){colorH[0].style.backgroundColor = changeColorH[0].value};
   // function setCI(){colorI[0].style.backgroundColor = changeColorI[0].value};
   // function setCJ(){colorJ[0].style.backgroundColor = changeColorJ[0].value};
   // function setCK(){colorK[0].style.backgroundColor = changeColorK[0].value};
   // function setCL(){colorL[0].style.backgroundColor = changeColorL[0].value};

   $('body').on('click', '#salvar-widgets', function(e){
      e.preventDefault();

      // window.lb = [];
      $('.lb').each(function(){
         $('#' + this.id).on('click', function(){
            co(this);
         });
      });

      function co(botao){
         alert(botao.id);
         var cor = botao.control.value;
         botao.style.backgroundColor = cor;
         tChart.data.datasets[0].backgroundColor = cor;

         tChart.update();
      }
   
      // ativ();
   });

   // function ativ(){
   //    $(tChart.data.datasets).each(function(){debugger
   //       tChart.data.datasets.backgroundColor = inn[0].value;
   //       tChart.data.datasets.hoverBackgroundColor = inn[0].value;
   //       lb[0].style.backgroundColor = inn[0].value;
   //       tChart.update();
   //    })
      
   //    // for(c = 0; c < inn.length; c++){
   //    //    tChart.data.datasets[c].backgroundColor = inn[c][0].value;
   //    //    tChart.data.datasets[c].hoverBackgroundColor = inn[c][0].value;
   //    //    lb[c][0].style.backgroundColor = inn[c][0].value;

   //    //    tChart.update();
   //    // };
   // };
   
   showLegends();
   i++;
};
/* /ChartJS */

/* select2 */
$(document).ready(function(){
   $('.select-style').select2();
});
// mudar entre logos grande e pequeno
$('.sidebar-toggle').click(function(){
   $('.user-panel').children().toggleClass('mostra');
});
// esconder a ul das config do chart ao clicar fora do box

// funcao a ser executada toda vez que adicionar um novo widget
function acc(i){
   // efeito accordion no botao configuracao do grid
   function of(){
      $('.prefer > ul').removeClass('in');
   };
   $('.prefer > li').click(of); // quando clicar na li das configuracoes do chart
   $('.box .gcf').click(of); // quando clicar no botao de configuracoes do chart

   i++;
};