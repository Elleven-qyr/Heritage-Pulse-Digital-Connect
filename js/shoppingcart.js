$(document).ready(
    function(){
        $(".addbtn").click(
            function(){
                  //获得数量
                var span_tempNum=$(this).parent().find("span");
                var num=span_tempNum.text();
                 //修改数量
                var new_num=Number(span_tempNum.text())+1;
                span_tempNum.text(new_num);
                if(new_num>1){
                  $(this).parent().find(".delbtn").prop("disabled",false);
                }
                  //获得单价  
                var span_unitPrice=$(this).parent().parent().find(".unitPrice");
                var unitPrice=Number(span_unitPrice.text());
                  //获得小计
                var span_tempPrice=$(this).parent().parent().find(".tempPrice");
                  //修改小计
                var tempPrice=Number(span_tempPrice.text())+unitPrice;
                span_tempPrice.text(tempPrice);
                //获得合计
                var span_totalPrice=$(".totalPrice");
                var totalPrice=Number(span_totalPrice.text())
                //修改合计
               /*if($(this).parent().find("input[name='ch1']").is(":checked"));
                   {
                        totalPrice+=unitPrice;
                    }
                    span_totalPrice.text(totalPrice);*/
        })
    })
    $(document).ready(
        function(){
            $(".delbtn").click(
                function(){
                      //获得数量
                    var span_tempNum=$(this).parent().find("span");
                    var num=span_tempNum.text();
                    if(num=="1"){
                      $(this).prop("disabled",true);
                    }
                     //修改数量
                     else{
                    var new_num=Number(span_tempNum.text())-1;
                    span_tempNum.text(new_num);
                      //获得单价  
                    var span_unitPrice=$(this).parent().parent().find(".unitPrice");
                    var unitPrice=Number(span_unitPrice.text());
                      //获得小计
                    var span_tempPrice=$(this).parent().parent().find(".tempPrice");
                      //修改小计
                    var tempPrice=Number(span_tempPrice.text())-unitPrice;
                    span_tempPrice.text(tempPrice);
                    //获得合计
                    var span_totalPrice=$(".totalPrice");
                    var totalPrice=Number(span_totalPrice.text())
                    //修改合计
                    /*if($(this).parent().find("input[name='ch1']").is(":checked"));
                        {
                            totalPrice-=unitPrice;
                        }
                        span_totalPrice.text(totalPrice);*/
            }})
                    //全选复选框
                    $("input[name='checkAll']").click(
                      function(){
                        var checklist=$("input[name='ch1']");
                        checklist.prop("checked",$(this).prop("checked"))
                    //统计已选商品数量 合计
                    var span_totalNum=$(".totalNum");
                    var span_totalPrice=$(".totalPrice");
                    if($(this).is(":checked")){
                        span_totalNum.text(checklist.length);//已选商品数目
                        var totalPrice=0;
                        checklist.each(
                          function(){
                            var span_tempPrice=$(this).parent().parent().find(".tempPrice");
                            var tempPrice=Number(span_tempPrice.text());
                            totalPrice+=tempPrice;
                        })
                    span_totalPrice.text(totalPrice);
                        }   
                    else{
                      span_totalNum.text(0);
                      span_totalPrice.text(0);
                        }
              })
              $("input[name='ch1']").click(
                  function(){
                    //获得当前商品小计
                     var span_tempPrice=$(this).parent().parent().find(".tempPrice");
                     var tempPrice=Number(span_tempPrice.text());
                    //获得合计和已选商品数量
                    var span_totalPrice=$(".totalPrice");
                    var totalPrice=Number(span_totalPrice.text());
                    var span_totalNum=$(".totalNum")
                    var totalNum=Number(span_totalNum.text());
                    if($(this).is(":checked")){
                      totalPrice+=tempPrice;
                      totalNum++;
                    }
                    else{
                      totalPrice-=tempPrice;
                      totalNum--;
                    }
                    span_totalPrice.text(totalPrice);//修改后合计
                    span_totalNum.text(totalNum);//修改后的数量
                    
                    var checklist=$("input[name='ch1']");
                    if(totalNum==checklist.length){
                      $("input[name='checkAll']").prop("checked",true);
                    }
                    else{
                      $("input[name='checkAll']").prop("checked",false);
                    }
              })
              $(".deletebtn").click(
                  function(){
                      var item_checkbox=$(this).parent().parent().find("input[name='ch1']");
                      var span_totalNum=$(".totalNum");
                      var totalNum=Number(span_totalNum.text());

                      if(item_checkbox.is(":checked")){
                        var span_tempPrice=$(this).parent().parent().find(".tempPrice");
                        var tempPrice=Number(span_tempPrice.text());

                        var span_totalPrice=$(".totalPrice");
                        var totalPrice=Number(span_totalPrice.text());

                        totalPrice-=tempPrice;
                        span_totalPrice.text(totalPrice);//修改后合计
                        totalNum--;
                        span_totalNum.text(totalNum);//修改后的已选商品数量
                      }
                      $(this).parent().parent().remove();//删除所在行

                      var checklist=$("input[name='ch1']");
                      if(totalNum==checklist.length){
                        $("input[name='checkAll']").prop("checked",true);
                      }
                      else{
                        $("input[name='checkAll']").prop("checked",false);

                      }
              })
          })
