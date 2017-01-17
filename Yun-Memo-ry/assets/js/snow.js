function snow($) {
    // The following code is from http://anohito.tw/sandbox/negi/negi_plus.js

      var Negi, body, document_width, fibo, negi;
      fibo = [2, 3, 5, 8, 13, 21, 34, 55, 89];
      negi = $('<img class="negi"></div>');
      document_width = $(document).width();
      body = $('body');
      body.append('<style>.negi{display:block;position:fixed;top:0;z-index:10}</style>');
      Negi = (function() {
        function Negi() {
          this.instance = negi.clone().attr('src', "http://anohito.tw/sandbox/negi/negi" + (Math.ceil(Math.random() * 6)) + ".png");
          this.instance.css({
            left: Math.random() * document_width
          });
          body.append(this.instance);
          this.speed = 0;
          this.run_times = 0;
        }

        Negi.prototype.run = function() {
          var _this = this;
          this.run_times++;
          if (this.run_times > 100) {
            this.instance.remove();
            return;
          }
          setTimeout((function() {
            var j, _i, _len;
            for (_i = 0, _len = fibo.length; _i < _len; _i++) {
              j = fibo[_i];
              if (_this.run_times % j === 0) {
                _this.speed += Math.random() - 0.5;
              }
            }
            _this.instance.css({
              left: (_this.speed > 0 ? "+=" : "-=") + Math.abs(_this.speed),
              top: 10 * _this.run_times
            });
            return _this.run();
          }), 60);
        };

        return Negi;

      })();
      return setInterval((function() {
        return (new Negi()).run();
      }), 500);


  }