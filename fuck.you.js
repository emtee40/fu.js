window.DEBUG = true;

var fb_all_posts = (function() {
var fb_posts = {};
jQuery.getJSON('getnodeterm/all', function(res) {
  jQuery.each(res.nodes, function(i, j) {
    fb_posts[j.node.post_id] = j.node;
  });
});
  return fb_posts;
})();

Array.prototype.shuffle = function (){ //v1.0
  var j, x, i ;
  var o = this;
  i = this.length
    while(i) {
            j = parseInt(Math.random() * i);
            i--;
            x = this[i];
            this[i] = this[j];
            this[j] = x;
          }
          return this;
}


var fn_counter = function() {
  var counter = 0;
  var real_fn = function() {
    counter++;
    return counter;
  }
  return real_fn;
}

var fck_y = function() {

  var text_01 = 'โครงการ “KidKid ศิลปะเพื่อรอยยิ้ม” <br> ที่มา จากประสบการณ์กิจกรรมช่วงเรียนมหาวิทยาลัย คือโครงการ Art2You ซึ่งเป็นกิจกรรมสอนศิลปะให้กับเด็กๆ บริเวณสวนสันติชัยปราการและชุมชนบริเวณท่าพระอาทิตย์<br> ทำให้ได้ค้นพบว่า การศึกษาที่โรงเรียนไม่เอื้อต่อการพัฒนาศักยภาพเด็กในด้านอื่นๆ นอกเหนือจากตำราเรียน เด็กๆ ไม่ค่อยมีโอกาสเข้าถึงศิลปะและสื่อสร้างสรรค์<br> ยิ่งไปกว่านั้น เด็กบางกลุ่ม มีลักษณะค่อนข้างก้าวร้าว พวกเราเชื่อว่าศิลปะสามารถกล่อมเกลาและพัฒนาจิตใจเด็กๆ ได้ จึงเป็นแรงบันดาลใจให้เกิดโครงการนี้ขึ้น<br> วัตถุประสงค์ <br> 1 สร้างศักยภาพเด็กผ่านกระบวนการต่างๆ <br> 2 สร้างกระบวนการที่นำไปสู่การแลกเปลี่ยนเรียนรู้กันระหว่างพี่ๆ และเด็กๆ<br> 3 สร้างแรงบันดาลใจ ปลูกฝังให้เด็กมีความคิดริเริ่มสร้างสรรค์ และมั่นใจที่จะลงมือทำสิ่งดีดี<br> 4 ปลูกฝังให้เด็กเกิดจิตสำนึก ความรัก ความรับผิดชอบต่อชุมชนและสังคม<br> 5 สร้างโอกาสการเรียนรู้นอกห้องเรียนและสภาพแวดล้อมใกล้ตัว<br> กลุ่มเป้าหมาย/ผู้รับประโยชน์ <br> กลุ่มเป้าหมายหลัก คือ เด็กและเยาวชนบริเวณสวนลุมพินี ประมาณ 20 คน อายุประมาณ 5-18 ปี ซึ่งทางโครงการจะมีกิจกรรมหลากหลายที่สอดคล้องกับช่วงอายุต่างๆ กันไป <br> กลุ่มเป้าหมายรอง คือ เด็กและเยาวชนทั่วไปที่สนใจร่วมกิจกรรม ไม่จำกัดอายุ ไม่จำกัดจำนวน รวมไปถึงพี่ๆ ที่อาสามาร่วมโครงการ ไม่ว่าจะกำลังศึกษาอยู่ วัยทำงาน<br> หรือบุคคลทั่วไป<br> รายละเอียดกิจกรรม<br> ทางโครงการจะพัฒนาศักยภาพเด็กในชุมชนผ่าน 2 กิจกรรมหลัก ดังนี้<br> 1. กิจกรรม ส.ส.ส. (สอนศิลปะ-สันทนาการ-สร้างสรรค์ประดิษฐ์) จัดขึ้นวันเสาร์แรกและเสาร์ที่สามของทุกเดือน ที่สวนสาธารณะลุมพินีวัน โดยกิจกรรมการสอนจะแบ่งเป็น 3 ช่วง<br> ตั้งแต่เวลาบ่ายโมงถึงหกโมงเย็น<br> ส. ที่ 1 : สอนศิลปะพื้นฐาน เช่น วาดรูปลายเส้น เรื่องทั่วไปเกี่ยวกับสี<br> ส. ที่ 2 : สันทนาการ เช่น กิจกรรมฝึกทักษะ ละลายพฤติกรรม ดนตรี<br> ส. ที่ 3 : สร้างสรรค์สิ่งประดิษฐ์ โดยวัสดุท้องถิ่นและสิ่งเหลือใช้ เช่น กรอบรูป โมบาย ตุ๊กตา นาฬิกา ถังขยะเพื่อใช้ในชุมชน<br> 2. กิจกรรมเปิดโลกทัศน์นอกสถานที่ (จัดขึ้นสองเดือนครั้ง)<br> ร่วมกับชมรม Arts Club ของนักศึกษาจากมหาวิทยาลัยธรรมศาสตร์ และเครือข่ายเด็กและเยาวชนอื่นๆ ในการประสานงานกับสถานที่ที่จัดนิทรรศการ แกลอรี่ต่างๆ เพื่อพาเด็กๆ<br> ไปทัศนศึกษา เรียนรู้นอกสถานที่ รวมไปถึงการพาเด็กๆ ไปร่วมกิจกรรมอาสาในสถานที่ต่างๆ<br> แผนการใช้งบประมาณ<br> 1.ค่าอุปกรณ์<br> - อุปกรณ์ที่สามารถใช้ได้นาน เช่น กาว กรรไกร กระดาษ สีน้ำ ฯลฯ 4,000 บาท<br> - อุปกรณ์ที่ขึ้นอยู่กับกิจกรรมในแต่ละครั้ง 9,000 บาท<br> 2. ค่าขนม 20 บาท ต่อคนต่อครั้ง 4,000 บาท<br> 3. ค่าเดินทางและเข้าชมนิทรรศการ 3,000 บาท<br> ผลกระทบต่อสังคม (ผลที่คาดว่าจะได้รับ)<br> การที่ผู้สอนและเด็กๆมีการแลกเปลี่ยนเรียนรู้ซึ่งกันและกัน จะเกิดการเปิดมุมมองใหม่ในสิ่งที่แตกต่างจากสภาพแวดล้อมของตนเอง จะนำไปสู่สังคมที่เข้าใจและยอมรับความแตกต่าง <br> เด็กและเยาวชนได้รับการพัฒนาความคิดริเริ่มสร้างสรรค์ ไม่ใช่เพียงในด้านศิลปะเท่านั้น แต่พัฒนาความคิดริเริ่มที่จะทำสิ่งดีๆให้ชุมชนและสังคมอย่างมั่นใจ<br> ความยั่งยืนของโครงการ/กลุ่ม และการดำเนินงานต่อไปในอนาคต <br> ผลจากโครงการสามารถต่อยอดได้ ดังนี้<br> 1. ขยายฐานกลุ่มเด็กและชุมชนเป้าหมาย โดยการถอดบทเรียนจากโครงการเพื่อนำไปปรับใช้กับที่อื่นๆต่อไป<br> 2. สร้างเครือข่ายKidKid เก็บฐานข้อมูลของทุกคนที่มาร่วมกิจกรรม เพื่อการอัพเดทความเคลื่อนไหวของกิจกรรมเครือข่ายในอนาคตผ่าน อีเมลล์และเฟซบุ๊ค<br> 3. เชื่อมต่อกับเครือข่าย และองค์กรภาคประชาสังคมอื่นๆ<br> 4. จัดนิทรรศการ เพื่อ สร้างแรงบันดาลใจให้คนกลุ่มอื่นในการทำสิ่งดีๆ<br> ขยายเครือข่าย หารายได้<br> ถอดบทเรียนและเผยแพร่แก่คนทั่วไปที่สนใจจะนำไปปรับใช้<br> "<br> ';

  var text_02 = "ปิดเทอมนี้<br>เราขอเสนอกิจกรรมดีๆ<br>กับโครงการ<br>TFS<br>Intracultural<br>Programs<br>Thailand<br>“โครงการเยาวชนทีเอฟเอสเพื่อการศึกษาและแลกเปลี่ยนวัฒนธรรมภายในประเทศ”<br><br>ที่มาและความสำคัญ:<br>ปัจจุบันจะเห็นว่าการไปแลกเปลี่ยนวัฒนธรรมที่ต่างประเทศ<br>(หรือที่คุ้นหูกันดีในโครงการที่มีชื่อว่า<br>ASF)<br>ในช่วงปิดภาคเรียนดูจะเป็นที่สนอกสนใจของวัยรุ่นไทยเป็นอย่างมาก<br>จึงเกิดไอเดียว่า<br>เราน่าจะมีการจัดทำโครงการแลกเปลี่ยนวัฒนธรรมกันภายในประเทศบ้าง<br>(และถือโอกาสเที่ยวไปในตัว<br>อิอิ)<br>ข้อดีของโครงการนี้อยู่ตรงที่ว่า<br>น้องๆสามารถชักชวนเพื่อนๆและร่วมกันเลือกโหวตจังหวัดที่ตนสนใจไปแลกเปลี่ยนและเรียนรู้วัฒนธรรม<br>เช่น<br>เด็กกรุงอาจจะเลือกโหวตเชียงใหม่<br>เพราะยังไม่เคยไปดูแพนด้า!..ผลโหวต<br>3<br>จังหวัดที่มีคะแนนสูงสุดจะเป็นชุมชนโครงการ<br>ซึ่งน้องๆที่โหวตจังหวัดนั้นๆจะมีสิทธิ์ได้รับการคัดเลือกให้เข้าร่วมโครงการ<br>งานนี้ไม่จำเป็นต้องพูดภาษาอังกฤษได้<br>แต่ถ้าพูดภาษาถิ่นที่จะไปได้จะดีมาก!<br>ส่วนสิ่งที่ต้องเตรียมไป<br>ให้พกเฉพาะค่าใช้จ่ายส่วนตัวและหัวใจแห่งการเรียนรู้เท่านั้น<br>ส่วนค่าตั๋วเราออกให้เองจ้า!<br><br>ลักษณะของโครงการ:<br>1.<br>เป็นโครงการระยะสั้น<br>3<br>สัปดาห์<br>โดยมีชุมชนโครงการ<br>3<br>จังหวัด<br>2.<br>กลุ่มผู้เข้าร่วมโครงการจะอาศัยและร่วมกิจกรรมกับชุมชนอาสา<br>เพื่อเรียนรู้วิถีชีวิต<br>วัฒนธรรมและประเพณีความเป็นอยู่ของผู้คนในแต่ละท้องถิ่นที่ตนเลือกไป<br>3.<br>กลุ่มผู้เข้าร่วมโครงการจะได้เข้าเยี่ยมชมและทัศนศึกษาตามสถานที่สำคัญๆของท้องถิ่นนั้นๆ<br>และร่วมทำกิจกรรมอาสากับเยาวชนและผู้คนในท้องถิ่น<br>เช่น<br>ปลูกป่า,<br>สอนหนังสือน้อง,<br>สร้างบ้านดิน<br>เป็นต้น<br>4.<br>กลุ่มผู้เข้าร่วมโครงการทำหน้าที่เป็นทูตวัฒนธรรม<br>เพื่อเผยแพร่<br>และแลกเปลี่ยนประเพณีวัฒนธรรมของท้องถิ่นตนเองให้แก่ชุมชน<br>5.<br>กลุ่มผู้เข้าร่วมโครงการเตรียมการนำเสนอในรูปแบบใดก็ได้<br>เพื่อสรุปในการประชุมประเมินผลโครงการ<br>หมายเหตุ:<br>ทางโครงการมีค่าใช้จ่ายให้<br>ซึ่งเป็นค่าใช้จ่ายที่ครอบคลุมเฉพาะค่าเดินทางและค่าดำเนินกิจกรรมเท่านั้น"

  var post;
  var actor;
  var picture = 'http://graph.facebook.com/'+ ' ' +'/picture';
  var created = new Date(1304397067000);

  post = { message: text_01, permalink: 'no', post_id: '1112233333444' };
  actor = { uid: '688190939', name: 'Tanya Thawee' }
  picture = "http://graph.facebook.com/"+ actor.uid +"/picture";
  var item = generate_item(picture, post, actor, created);
  $('#results').append(item);
  prepare_function_is_like_text(post.post_id);
  prepare_function_vote_number(post.post_id);
  //$('#results-count').html($('#results li').size() + " results");
  jQuery('li[post_id='+post.post_id+']').addClass('category-225');

  post = { message: text_02, permalink: 'no', post_id: '220551554627180_134285409981092' };
  actor = { uid: '100000429054642', name: 'Pebble Piya' }
  picture = "http://graph.facebook.com/"+ actor.uid +"/picture";
  created = new Date(1304397067000);
  item = generate_item(picture, post, actor, created);
  $('#results').append(item);
  prepare_function_is_like_text(post.post_id);
  prepare_function_vote_number(post.post_id);
  //$('#results-count').html($('#results li').size() + " results");
  jQuery('li[post_id='+post.post_id+']').addClass('category-221');
  FB.Canvas.setSize();

}
var is_like_text_data = function() {
  var data = [];

  return {
            'getData': function() { return data; },
             'add': function(pid) {
                var tobj = { post_id: pid };
                var fbuid = FB.getSession().uid;
                var request_path = '/facebook/util/delta/get/'+pid+'/'+fbuid;
                jQuery.getJSON(request_path, function(json) {
                    var isLike = json && json.delta;
                    if (isLike != false) {
                      tobj.isLike = true;
                    }
                    else {
                      tobj.isLike = false;
                    }
                });
                request_path = '/facebook/util/vote/get/'+pid;
                jQuery.getJSON(request_path, function(json) {
                    var votenum = json && json.votenum;
                    var voteme;

                    if (votenum == 0) {
                      voteme = 0;
                    }
                    else {
                      voteme = votenum;
                    }
                    tobj.voteme = voteme;
                })
                data.push(tobj);
              },
             'search': function(post_id) {
               var result;
               $.each(data, function(i, object) {
                   if (object.post_id == post_id) {
                     result = object;
                   }
               });
               return result;
             }
         }; //object
}
var text_data = is_like_text_data();

var ideas_promoted = function() {
  var promoted_ideas = [];
  $.getJSON('/facebook/idea/promoted', function(resp) {
      var ideas_length = resp.nodes.length;
      $.each(resp.nodes, function(i, j) {
        promoted_ideas.push(j.post_id['field_facebook_post_id_value']);
        text_data.add(j.post_id['field_facebook_post_id_value']);
        if (i == ideas_length - 1) {
         //do on the last
        }
      });
  });
  return function(post_id) {
    return promoted_ideas.indexOf(post_id);
  }
}
var is_promoted;
window.get_result = function () {
  $('#prepare-page').remove();
  $('#like-count').show();
  $('#results').html('<p class="loading">please wait, processing ...</p>');
/*
  var range_begin = $('#date-begin').datepicker('getdate').gettime();
  var range_tmp = $('#date-end').datepicker('getdate').gettime();
  var range_end = new date(range_tmp).sethours(17,0,0);
  if (typeof console != undefined)
    console.log(range_end, new date(range_end));

  generate_result(range_begin/1000, range_end/1000);
  */
  generate_result(ndaysago(30).getTime()/1000, today().getTime()/1000);
}
window.post_id_list = [];
window.create_post_id_to_check = function(list)  {
  var output = [];
  fb.array.foreach(list, function(v, k) {
    output.push('"' + v + '"');
  });
  output = output.join(',');
  output = "(" + output.tostring() + ")";
  return output;
}
window.generate_result = function(range_begin, range_end) {
  var query =
    "SELECT post_id, attachment, likes, created_time, actor_id, message, permalink, attribution " +
    "FROM stream " +
    "WHERE source_id = {0} AND actor_id != '220551554627180' AND attribution='happyschoolbreak.com' " +
/*          "created_time > '" + range_begin + "' AND " +
           "created_time <= '" + range_end + "' " + */
/*           "AND likes.count > 0 " +
    "ORDER BY likes.count DESC " + */
    /*" ORDER BY created_time DESC " + */

    " LIMIT 999";

  var posts = FB.Data.query(query, Drupal.settings.fb_util.pageid);
  var users = FB.Data.query(
     "SELECT uid, name " +
     "FROM user " +
     "WHERE uid in " +
     "(SELECT actor_id from {0})", posts);
  FB.Data.waitOn([posts, users], function() {
    $('#results').html('');
    var user_list = {};

    FB.Array.forEach((users.value).shuffle(), function(user) {
      user_list[user.uid] = user;
    });
    var cnt = fn_counter();
    var cnt2 = fn_counter();
    var cnt3 = fn_counter();

    FB.Array.forEach((posts.value).shuffle(), function(post, i) {
      if(typeof(console) !== 'undefined' && console != null) {
        //console.log('ALL', cnt());
      }

      var foreach_length = posts.value.length;
      if (post.attachment != undefined) {
        var actor = user_list[post.actor_id];
        var created = new Date(post.created_time * 1000);
        var picture = "http://graph.facebook.com/" + post.actor_id + "/picture";

        if (is_promoted(post.post_id) != -1) {
          jQuery.getJSON('/facebook/util/getnodeterm/' + post.post_id, function(res) {
            var category = '';
            if (res.length>0) {
              var item = generate_item(picture, post, actor, created);
              post_id_list.push(post.post_id);
              $('#results').append(item);
              prepare_function_is_like_text(post.post_id);
              prepare_function_vote_number(post.post_id);
              $('#results-count').html($('#results li').size() + " results");
              category = res[0].name;
              jQuery('li[post_id='+post.post_id+']').addClass('category-'+res[0].tid);
              if ($('#results li').length == 48) {
                fck_y();
              }
            }
            else {
              item = "";
              jQuery('li[post_id='+post.post_id+']').remove();
              if(0 && typeof(console) !== 'undefined' && console != null) {
                console.log('failed', cnt3());
                FB.api('/' + post.actor_id, function(resp) {
                });
              }

            }
          });//getJSON
        }
        else {

        }
      }
    });
  });
  FB.Canvas.setSize();
}

window.generate_item = function(picture, post, actor, created) {
  var item;
  /*
  if (typeof console != undefined)
    console.log(post);
    */
  var post_id = post.post_id;
  if (is_promoted(post_id) != -1) {
    //console.log(post_id, 'IN', is_promoted(post_id));
    try {
      item = "\
        <li class='user-idea' post_id="+ post.post_id +">\
          <div class='item-profile'>\
            <img src='" + picture + "'>\
          </div> \
            <div class='item-info'>\
              <div class='item-author'>\
                <a href='http://facebook.com/profile.php?id=" + actor.uid + "'>" + actor.name + "</a>\
                <em>" + created.format('mmmm dd, yyyy HH:MM') + "</em>\
              </div>\
              <div class='item-message'>" + post.message + "</div>\ <div class='item-permalink'><!--link: <a href='" + post.permalink + "'>" + post.permalink + "</a> !--></div>\ </div>\
          <div class='item-like'> \
            <span class='item-like-count'>" + '-' + "</span>\
            <span class='item-like-button'></span>\
          </div>\
          <div style='clear:both'></div>\
        </li>";
    }// try
    catch (err) {
      if(1 && typeof(console) !== 'undefined' && console != null) {
        console.log(err);
      }

    }
    return item;
  }
  else {
    //console.log('-------', post_id, 'OUT');
  }
}

function prepare_function_vote_number(post_id, cache) {
  var fbuid = FB.getSession().uid;
  var request_path = '/facebook/util/vote/get/'+post_id;
  var selector = '.user-idea[post_id='+post_id+'] .item-like > .item-like-count';
  if (cache == 'fresh') {
    return function() {
        jQuery.getJSON('/facebook/util/get_contest_start', function(res) {
          if (res['status'] !== 0) {
            jQuery.getJSON(request_path, function(json) {
                var votenum = json && json.votenum;
                if (votenum == 0) {
                  $(selector).html('0');
                }
                else {
                  $(selector).html(votenum);
                }
            });
          }
          else {
            $(selector).html('?');
          }
        }); // get contest start
    };
  }
  else {
    var data = text_data.search(post_id);
    if (data != undefined) {
      var votenum = data.voteme;
      if (votenum == 0) {
        $(selector).html('0');
      }
      else {
        $(selector).html(votenum);
      }
    }
  }
}

function prepare_function_is_like_text(post_id) {
  var data = text_data.search(post_id);
  if(data != undefined) {
    var selector = '.user-idea[post_id='+post_id+'] .item-like > .item-like-button';
    var isLike =  data.isLike;
    if (isLike != false) {
      $(selector).addClass('liked').html('Liked');
    }
    else {
      $(selector).html('Not Like');
    }
  }
  else {
    var fbuid = FB.getSession().uid;
    var request_path = '/facebook/util/delta/get/'+post_id+'/'+fbuid;
    return function() {
      jQuery.getJSON(request_path, function(json) {
          var isLike = json && json.delta;
          if (isLike != false) {
            $(selector).addClass('liked').html('Liked');
          }
          else {
            $(selector).html('Not Like');
          }
      });
    };
  }
}
window.today = function() {
  var d = new Date();
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

window.midnight = function() {
  return new Date(today().getTime() + 86400000);
}

window.now = function() {
  return new Date();
}

window.ndaysago = function(n) {
  return new Date(today().getTime() - n*86400000);
}
window.DEBUG = false;
window.fbAsyncInit = function() {
  // Init facebook sdk.
  FB.init({
    appId  : Drupal.settings.fb_util.appid,
    status : false, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : false  // parse XFBML
  });
  FB.Canvas.setAutoResize(91);
  FB.getLoginStatus(function(response) {
    if (response.session) {
      if(0 && typeof(console) !== 'undefined' && console != null) {
        console.log('logged in');
      }
      is_promoted = ideas_promoted();
      get_result();
    }
    else {
      if(0 && typeof(console) !== 'undefined' && console != null) {
        console.log('redirect');
      }
      var login_url = "http://www.facebook.com/dialog/oauth/?scope=email&client_id=" + Drupal.settings.fb_util.appid +"&redirect_uri=http://www.happyschoolbreak.com/facebook/util/verify&response_type=code_and_token&display=page";

      top.window.location.href = login_url;
    }
  });
};


jQuery(document).ready(function ($) {
  jQuery('#like-count').hide();
  (function() {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol +
      '//connect.facebook.net/en_US/all.js';
      document.getElementById('fb-root').appendChild(e);
  }());

  $('#get-result').click(function (e) {  });

});

$('.category-item').live('click', function(e) {
    var self = $(this);
    var tid = self.attr('tid');
    var user_idea_selector = '.user-idea.category-'+tid;
    if (tid == 'all') {
      $('.user-idea').show();
    }
    else {
      $('.user-idea').hide();
    }
    $('.category-item').removeClass('active');
    self.addClass('active');
    $(user_idea_selector).show();
});

$('.item-like-button').live('click', function(e) {
  var self = $(this);
  var li = self.parent().parent('li');
  self.toggleClass('liked');
  var friend = self.siblings('.item-like-count').eq(0);
  friend.html('?');
  if (self.is('.liked')) {
    if(1 && typeof(console) !== 'undefined' && console != null) {
      friend.html('+');
    }
  }
  else {
    if(1 && typeof(console) !== 'undefined' && console != null) {
      friend.html('-');
    }
  }
  var post_id = li.attr('post_id');
  if(1 && typeof(console) !== 'undefined' && console != null) {
    jQuery.post('/facebook/util/vote/toggle/'+post_id, { fb_session: JSON.stringify(FB.getSession()) }, function(res) {
      var json_obj = JSON.parse(res);
      var _status = json_obj && json_obj['status'];
      if(0 && typeof(console) !== 'undefined' && console != null) {
        console.log('_status = ', _status, res);
      }
      if (_status == 'voted') {
        self.removeClass('liked');
        self.addClass('liked');
        self.html('LIKED');
      }
      else {
        self.removeClass('liked');
        self.html('Not Like');
      }
      prepare_function_vote_number(post_id, 'fresh')();
    });
  }
});
