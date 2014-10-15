
      // $(document).ready(function() {
        // disable scrolling on touch devices so we can actually draw
        $(document).bind('touchmove', function(e) {
          if (e.target === document.documentElement) {
            return e.preventDefault();
          }
        });

        // the only LC-specific thing we have to do
        function addCanvas(){
	        $('.SECT').literallycanvas();
	        $(".SECT").not( $(".SECT:first") ).hide();
	        var pageChangeul = "<ul class='page-change left'><li class='arrow-up'><span class='button icon-up-arrow'></span></li><li class='arrow-up-one'><span class='button icon-circle-arrow-top'></span></li><li class='arrow-down-one'><span class='button icon-circle-arrow-down'></span></li><li class='arrow-down'><span class='button icon-down-arrow'></span></li></ul><ul class='page-change right'><li class='arrow-up'><span class='button icon-up-arrow'></span></li><li class='arrow-up-one'><span class='button icon-circle-arrow-top'></span></li><li class='arrow-down-one'><span class='button icon-circle-arrow-down'></span></li><li class='arrow-down'><span class='button icon-down-arrow'></span></li></ul>"
			function appenPageul(){
			  $(".SECT").append( pageChangeul );
			}
			appenPageul();
		}
		function canvasHide(){
			$("canvas,.page-change,.toolbar").hide();
		}
		function canvasShow(){
			$("canvas,.page-change,.toolbar").show();
		}

		function wordaddCanvas(){
	        $('.SECT2').literallycanvas();
	        var wordHeight = document.body.scrollHeight;
			$(".SECT2").css("height",wordHeight);
		}

		$(".sidebar").on("click","ul li a",function(){
			$(this).parent().addClass("current").siblings().removeClass("current");
			 var sidebarLI = $(this).parent().index();
			$(".SECT").eq(sidebarLI).show().siblings().hide();
			liAddCurrent()
		})


		$("section").on("click",".arrow-up",function(){
			var arrowSection = $(this).closest(".SECT");
			arrowSection.prev().fadeIn("slow").siblings().hide();
			liAddCurrent()
		});

		$("section").on("click",".arrow-down",function(){
			var arrowSection = $(this).closest(".SECT");
			arrowSection.next().fadeIn("slow").siblings().hide();
			liAddCurrent()
		});

		function liAddCurrent(){
			var SECTIndex = $(".SECT:visible").index();
			$(".sidebar li").eq(SECTIndex).addClass("current").siblings().removeClass("current");
		}

      // });
