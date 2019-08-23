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
                                       '<h3 class="box-title" id="box-title' + i + '">Box Title</h3>' +
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
                                                      '<li><label for="change-color-a' + i + '" class="btn btn-xs btn-info" id="color-a' + i + '">Item 1</label></li>' +
                                                      '<input type="color" id="change-color-a' + i + '" style="display:none">' +
                                                      
                                                      '<li><label for="change-color-b' + i + '" class="btn btn-xs btn-info" id="color-b' + i + '">Item 2</label></li>' +
                                                      '<input type="color" id="change-color-b' + i + '" style="display:none">' +
                                                      
                                                      '<li><label for="change-color-c' + i + '" class="btn btn-xs btn-info" id="color-c' + i + '">Item 3</label></li>' +
                                                      '<input type="color" id="change-color-c' + i + '" style="display:none">' +
                                                      
                                                      '<li><label for="change-color-d' + i + '" class="btn btn-xs btn-info" id="color-d' + i + '">Item 4</label></li>' +
                                                      '<input type="color" id="change-color-d' + i + '" style="display:none">' +
                                                      
                                                      '<li><label for="change-color-e' + i + '" class="btn btn-xs btn-info" id="color-e' + i + '">Item 5</label></li>' +
                                                      '<input type="color" id="change-color-e' + i + '" style="display:none">' +
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
         datasets: [{
            label: 'Dataset',
            data: [d1, d2, d3, d4, d5],
            backgroundColor: [green, red, orange, blue, gold],
         }, {
            label: 'Dataset 2',
            data: [d3, d1, d4, d5, d2],
            backgroundColor: [orange, blue, green, gold, red],
         }, {
            label: 'Dataset 3',
            data: [d2, d4, d5, d3, d1],
            backgroundColor: [red, orange, gold, green, blue],
         }],
         
         labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      },
         
      options: {
         responsive: true,
         maintainAspectRatio: false,

         legend: {
            position: 'top',
         },

         title: {
            display: true,
            text: 'Chart.js Title'
         },

         animation: {
            animateScale: true,
            animateRotate: true
         },

         scales: {
            xAxes: [{
               gridLines: {
                  display: true
               }
            }],
            yAxes: [{
               gridLines: {
                  display: true
               }
            }]
         },
      },
   });

   // chama botao meia rosca
   var meiaRosca = document.getElementById('changeDoughnut' + i);
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
      meiaRosca.style.display = 'none';
   };

   // mostrar botao meia rosca
   function showButtonDonut(){
      meiaRosca.style.display = 'inline-block';

      meiaRosca.addEventListener('click', function() {
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

   // barra
   function graphBar(){
      tChart.destroy();
      hideButtonDonut();
      
      tChart = new Chart(ctx, {
         type: 'bar',
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: [green, red, orange, blue, gold],
            }, {
               label: 'Dataset 2',
               data: [d3, d1, d4, d5, d2],
               backgroundColor: [orange, blue, green, gold, red],
            }, {
               label: 'Dataset 3',
               data: [d2, d4, d5, d3, d1],
               backgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
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
   };

   // rosca
   function graphDoughnut(){
      tChart.destroy();
      
      
      tChart = new Chart(ctx, {
         type: 'doughnut',
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }, {
               label: 'Dataset 2',
               data: [d3, d1, d4, d5, d2],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }, {
               label: 'Dataset 3',
               data: [d2, d4, d5, d3, d1],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
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
      

      tChart = new Chart(ctx, {
         type: 'line',
         
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: red,
               pointStyle: 'circle',
               pointRadius: 5,
               pointHoverRadius: 7,
               fill: false,
               borderColor: red,
            }, {
               label: 'Dataset 2',
               data: [d3, d1, d4, d5, d2],
               backgroundColor: blue,
               pointStyle: 'circle',
               pointRadius: 5,
               pointHoverRadius: 7,
               fill: false,
               borderColor: blue,
            }, {
               label: 'Dataset 3',
               data: [d2, d4, d5, d3, d1],
               backgroundColor: gold,
               pointStyle: 'circle',
               pointRadius: 5,
               pointHoverRadius: 7,
               fill: false,
               borderColor: gold,
            }],

            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
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
   };

   // radar
   function graphRadar(){
      tChart.destroy();
      hideButtonDonut();
      

      tChart = new Chart(ctx, {
         type: 'radar',
         
         data: {
            datasets: [{
                  label: 'Dataset',
                  data: [d1, d2, d3, d4, d5],
                  backgroundColor: red + '99',
                  borderColor: red,
                  pointBackgroundColor: red,
                  pointHoverRadius: 5,
            }, {
                  label: 'Dataset 2',
                  data: [d3, d1, d4, d5, d2],
                  backgroundColor: blue + 'cc',
                  borderColor: blue,
                  pointBackgroundColor: blue,
                  pointHoverRadius: 5,
            }, {
                  label: 'Dataset 3',
                  data: [d2, d4, d5, d3, d1],
                  backgroundColor: gold,
                  borderColor: gold,
                  pointBackgroundColor: gold,
                  pointHoverRadius: 5,
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },
         
         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
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
      

      tChart = new Chart(ctx, {
         type: 'pie',
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }, {
               label: 'Dataset 2',
               data: [d3, d1, d4, d5, d2],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }, {
               label: 'Dataset 3',
               data: [d2, d4, d5, d3, d1],
               backgroundColor: [red, orange, gold, green, blue],
               hoverBorderWidth: 7,
               hoverBorderColor: [red, orange, gold, green, blue],
               hoverBackgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },
         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
            },

            animation: {
               animateScale: true,
               animateRotate: true,
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
      

      tChart = new Chart(ctx, {
         type: 'bar',

         data: {
            datasets: [{
               label: 'Line Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: green,
               borderColor: green,
               fill: false,
               type: 'line',
            }, {
               label: 'Line Dataset 2',
               data: [d3, d1, d4, d5, d2],
               backgroundColor: blue,
               borderColor: blue,
               fill: false,
               type: 'line',
            }, {
               label: 'Bar Dataset',
               data: [d2, d4, d5, d3, d1],
               backgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },

         options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
               position: 'top',
            },

            title: {
               display: true,
               text: 'Chart.js Title',
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
   
   i++;
};
/* /ChartJS */

/* select2 */
$(document).ready(function(){
   $('.select-style').select2();
});

$('.sidebar-toggle').click(function(){
   $('.user-panel').children().toggleClass('mostra');
});

/* efeito accordion no botao configuracao do grid */
function acc(){
   function of(){
      $('.prefer > ul').removeClass('in');
   };
   $('.prefer > li').click(of); // quando clicar na li das configuracoes do chart
   $('.box .gcf').click(of); // quando clicar no botao de configuracoes do chart
};