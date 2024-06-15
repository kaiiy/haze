<template>
    <div class="main-container">
        <div class="main-left">
            <div class="title">HINT</div>
            <div class="caution">
                <ul>
                    <li>右のステージをクリックした回数分、ヒントが出ます。</li>
                    <li>括弧内の数字はヒントの個数です。</li>
                    <li>一番最後のヒントにはクリアまでの操作例を載せています。</li>
                </ul>
            </div>

            <div class="caution" v-for="hintMsg in filteredHint" :key="hintMsg.id">
                <div class="caution-title" v-show="'isShow.msg.boolArray[' + hintMsg.id - 1 + ']'">
                    ヒント{{ hintMsg.id }}
                </div>
                <p v-html="hintMsg.msg"></p>
            </div>
        </div>
        <div class="main-right">
            <div @click="showThisHint(1);">STAGE1 (5)</div>
            <div @click="showThisHint(2);">STAGE2 (6)</div>
            <div @click="showThisHint(3);">STAGE3 (9)</div>
            <div @click="showThisHint(4);">STAGE4-1 (5)</div>
            <div @click="showThisHint(5);">STAGE4-2 (3)</div>
            <div @click="showThisHint(6);">STAGE4-3 (4)</div>
            <div @click="showThisHint(7);">STAGE5 (4)</div>
            <div @click="showThisHint(8);">STAGE6 (5)</div>
            <div @click="showThisHint(9);">STAGE7 (4)</div>
            <div @click="showThisHint(10);">STAGE8 (5)</div>
            <div @click="showThisHint(11);">STAGE9-1 (5)</div>
            <div @click="showThisHint(12);">STAGE9-2 (3)</div>
            <div @click="showThisHint(13);">STAGE10 (8)</div>
            <div @click="showThisHint(14);">ALL CLEAR (3)</div>
            <br />
            <a href="./index.html">メインページ</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            isShow: {
                stage: {
                    num: 0,
                },
                msg: {
                    num: 1,
                },
            },
            hintMsg: [
                { name: "nothing", id: 0, msgs: [] },

                // HAZE1
                {
                    name: "haze1",
                    id: 1,
                    msgs: [
                
                        {
                            id: 1,
                            msg:
                                "矢印キーを適当に押してみましょう。いつかクリアできると思います。",
                        },
                        {
                            id: 2,
                            msg:
                                "「矢印キーによる操作」、「正方形の枠の太さ」は何を表していたのでしょうか。",
                        },
                        {
                            id: 3,
                            msg:
                                "盤面を書いてみましょう。",
                        },
                        {
                            id: 4,
                            msg:
                                "4×4の盤面になっていました。画面に見えているマスはプレイヤーがいるマスを表示しています。また、「矢印キーによる操作」は上下左右の移動、「正方形の枠の太さ」は隣接するマスの種類（太い線：黒マス、細い線：白マス）を表していました。",
                        },
                        {
                            id: 5,
                            msg: "解答例（キーボード操作）：右右下右下下左",
                        },
                    ],
                },

                // HAZE2
                {
                    name: "haze2",
                    id: 2,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "HAZE1のようにSからGに行くだけではクリアできません。盤面全体を紙などに書いてみましょう。",
                        },
                        {
                            id: 2,
                            msg:
                                "考え方を変えましょう。盤面上で白マスが横5マス、縦4マスでクロスしています。",
                        },
                        {
                            id: 3,
                            msg: "これはスケルトンでした。埋めるものはS及びGで始まる単語です。",
                        },
                        {
                            id: 4,
                            msg:
                                "SとGから連想されるもの。HAZE1で示されていたように、STARTとGOALです。では、盤面に埋めてみましょう。",
                        },
                        {
                            id: 5,
                            msg:
                                "入力したいマスに移動し、キーボードで適切なアルファベットを打ち込みましょう。",
                        },
                        {
                            id: 6,
                            msg: "解答例キーボード操作：<br>右T右A右R右T左左下L上上O",
                        },
                    ],
                },

                // HAZE3
                {
                    name: "haze3",
                    id: 3,
                    msgs: [
                        {
                            id: 1,
                            msg: "まずは、盤面を書きましょう。",
                        },
                        {
                            id: 2,
                            msg: "マスの数はいくつでしょうか。",
                        },
                        {
                            id: 3,
                            msg:
                                "マスの数は26、アルファベットが連想されます。SとGの位置が合うようなアルファベットの位置を考えましょう。",
                        },
                        {
                            id: 4,
                            msg:
                                "左から右へABCD...と埋まります。では、矢印に注目しましょう。矢印が差すマス（矢印が消えるマス）へ移動し、そのマスのアルファベットを確認しましょう。",
                        },
                        {
                            id: 5,
                            msg:
                                "拾えるアルファベットはAEQSUとなります。アルファベットを入力するためにEnterを押してみましょう。",
                        },
                        {
                            id: 6,
                            msg:
                                "マスの上にアスタリスクが表示されました。背景と同じ色のものも合わせて全部で6つあるようです。矢印の数はいくつでしょうか。",
                        },
                        {
                            id: 7,
                            msg:
                                "見えている矢印は最大5つ、すなわち矢印もひとつ見えません。すでに分かっているアルファベットから残りのひとつを推測しましょう。",
                        },
                        {
                            id: 8,
                            msg:
                                "アスタリスクと矢印の色の対応から、SQUA〇Eとなり、残りのひとつはUとなります。",
                        },
                        {
                            id: 9,
                            msg:
                                "解答例キーボード操作：<br>Enter 上右×4 Enter 下左×2 Enter 上×3左×2 Enter 右×5下×2 Enter 上×2左 Enter",
                        },
                    ],
                },

                // HAZE4-1
                {
                    name: "haze4-1",
                    id: 4,
                    msgs: [
                        {
                            id: 1,
                            msg: "最初の位置から下右と進んだマスに注目しましょう。",
                        },
                        {
                            id: 2,
                            msg:
                                "下の線がありません。とりあえずこのマスでいろいろなキーを押してみましょう。",
                        },
                        {
                            id: 3,
                            msg:
                                "Enterでマスの枠が変わったはずです。とりあえず、矢印は右を差しているので右に行けばクリアはできます。線がないマスにおけるEnterは何を表していたのでしょうか。（次ヒントで解答）",
                        },
                        {
                            id: 4,
                            msg:
                                "Enterを押す前と後の盤面を紙などに書いてみると、線がないマスがもともといたマスと入れ替わっていることが分かります。隣接するマスに線のないマス（存在しないマス）がある場合、その場所へ今いるマスがスライドするというルールでした。",
                        },
                        {
                            id: 5,
                            msg: "解答例キーボード操作：下右 Enter 右 ",
                        },
                    ],
                },

                //   HAZE4-2
                {
                    name: "haze4-2",
                    id: 5,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "クリックすると左の丸は白と白黒の2つの状態を持つようです。白黒の状態でGに到達してもクリアにはなりません。白の状態でGに到達することを考えましょう。",
                        },
                        {
                            id: 2,
                            msg:
                                "白の状態では白マスのみ、白黒の状態では白マスと黒マスに行けること、HAZE4-1のEnterの仕様を利用します。丸の状態入換の際、Sに飛ばされることに注意しましょう。",
                        },
                        {
                            id: 3,
                            msg:
                                "解答例操作：<br>(丸入換) 下×2右×2 Enter 左上 Enter 上左×2下 Enter (丸入換) 右下×2",
                        },
                    ],
                },

                //   HAZE4-3
                {
                    name: "haze4-3",
                    id: 6,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "ここでは存在しないマスが複数あります。Enterによる盤面の変化から考えてもよいですが、別の方向性から考えてみましょう。このとき、HAZE4-1、HAZE4-2での法則では未定義動作が存在します。",
                        },
                        {
                            id: 2,
                            msg:
                                "それは「今いるマスに2つ以上存在しないマスが隣接していた場合どうなるのか」です。",
                        },
                        {
                            id: 3,
                            msg:
                                "実際に2つ以上隣接しているマスで試してみると、動きません。あとは、パズルを解きましょう。",
                        },
                        {
                            id: 4,
                            msg:
                                "解答例キーボード操作：<br>(丸入換) 右右 Enter 右上 Enter 左左下下 Enter 上左 Enter 下 Enter 上上右 Enter (丸入換) Enter 右 Enter 下 Enter 右",
                        },
                    ],
                },

                //   HAZE5
                {
                    name: "haze5",
                    id: 7,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "盤面が2つあります。片方だけGに到達してもクリアではないようです。ということは......",
                        },
                        {
                            id: 2,
                            msg:
                                "同時にGに到達することを考えましょう。そのためには片側だけ移動させられる法則が必要そうです。",
                        },
                        {
                            id: 3,
                            msg:
                                "黒マスや盤面全体の枠のある方向にはマスは移動できないことを利用して、片側だけ動かし2つの盤面の今のマスの位置関係を調整します。",
                        },
                        {
                            id: 4,
                            msg: "解答例キーボード操作：<br>下右下左×4上右上",
                        },
                    ],
                },

                //   HAZE6
                {
                    name: "haze6",
                    id: 8,
                    msgs: [
                        {
                            id: 1,
                            msg: "盤面を紙などに書いてじっと見つめましょう。",
                        },
                        {
                            id: 2,
                            msg:
                                "盤面の右上のあたり、枠でもないのに上や下に行けない場所、つまり壁を見落として書いてはいませんか？",
                        },
                        {
                            id: 3,
                            msg: "盤面全体が何かを表しています。",
                        },
                        {
                            id: 4,
                            msg:
                                "マス全体がアルファベットを表しています。分かったらそのままキーボードで入力しましょう。",
                        },
                        {
                            id: 5,
                            msg: "解答例キーボード操作：<br>CELL",
                        },
                    ],
                },

                //   HAZE7
                {
                    name: "haze7",
                    id: 9,
                    msgs: [
                        {
                            id: 1,
                            msg: "まずは盤面を書きましょう。",
                        },
                        {
                            id: 2,
                            msg: "マスを全て線で置き換えてみるといいかもしれません。",
                        },
                        {
                            id: 3,
                            msg:
                                "これはあみだくじを表していました。そのままキーボードで入力しましょう。",
                        },
                        {
                            id: 4,
                            msg: "解答例キーボード操作：<br>SILENT",
                        },
                    ],
                },

                //   HAZE8
                {
                    name: "haze8",
                    id: 10,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "注目しなければならないのは、適当に移動していると必ず行き詰る、全方向黒マスに囲まれるということです。",
                        },
                        {
                            id: 2,
                            msg: "先程いたマスはどうなっているでしょうか。",
                        },
                        {
                            id: 3,
                            msg:
                                "そうです。黒マスに変わっています。行きたいところに行けなくなるのではありません。発想を変えましょう。自分の通り道が黒マスになってしまうのであれば、クリア条件は何と予想されるでしょうか。",
                        },
                        {
                            id: 4,
                            msg:
                                "盤面全体を黒マスに、自分が全て通ることで白マスを無くしてしまいましょう。",
                        },
                        {
                            id: 5,
                            msg:
                                "解答例キーボード操作：<br>上左上上右上左左下左上左×3下右下下左下下右下右上×4右下右下下左下右右上右",
                        },
                    ],
                },

                //   HAZE9-1
                {
                    name: "haze9-1",
                    id: 11,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "隣接しているマスが黒マスでもその方向に進める場合がありますね。",
                        },
                        {
                            id: 2,
                            msg:
                                "上左左と移動して右に移動し、その下にある黒マスが周りから操作を加えるとどうなるか、試してみるといいかもしれません。",
                        },
                        {
                            id: 3,
                            msg:
                                "黒マスの方向に移動すると、太い線は常にその方向にあることから、黒マスが移動している、と考えられないでしょうか。つまり、自分のいるマスが黒マスをその方向に押しています。",
                        },
                        {
                            id: 4,
                            msg:
                                "Sから上左×3の下のマスに黒マスがあること、さらにSから左に3マス押せることから、黒マスは何個連続していてもスペースがある限り押せるようです。",
                        },
                        {
                            id: 5,
                            msg: "解答例キーボード操作：<br>左左上左左下下右下右右下",
                        },
                    ],
                },

                //   HAZE9-2
                {
                    name: "haze9-2",
                    id: 12,
                    msgs: [
                        {
                            id: 1,
                            msg:
                                "メタ的な考え方ですが、HAZE9-1で黒マスは何個連続していてもスペースがある限り押せたということは次は......?",
                        },
                        {
                            id: 2,
                            msg: "黒マスは1個しか押せないようです。",
                        },
                        {
                            id: 3,
                            msg: "解答例キーボード操作：<br>上左左下左下下右右下",
                        },
                    ],
                },

                //   HAZE10
                {
                    name: "haze10",
                    id: 13,
                    msgs: [
                        {
                            id: 1,
                            msg: "まずは盤面を紙などに書いてみましょう。",
                        },
                        {
                            id: 2,
                            msg:
                                "中くらいの線、すなわち盤面の枠があってもその方向に進める場合があるようです。",
                        },
                        {
                            id: 3,
                            msg:
                                "上手く壁を避ければ、どうやら特定の方向に無限に進むことができるようです。この盤面は無限に広がっているのでしょうか？",
                        },
                        {
                            id: 4,
                            msg:
                                "これは3次元、立方体になっていました。では、この立方体はなんでしょうか。",
                        },
                        {
                            id: 5,
                            msg:
                                "HAZE6と同様です。各盤面6面がそれぞれアルファベットになっています。",
                        },
                        {
                            id: 6,
                            msg: "OTTFFSの文字がありますね。",
                        },
                        {
                            id: 7,
                            msg:
                                "これは1~6の英単語のスペルの頭文字でした。これがあのような配置に並んでいるということは......?",
                        },
                        {
                            id: 8,
                            msg: "解答例キーボード操作：DICE",
                        },
                    ],
                },

                //   all clear
                {
                    name: "all clear",
                    id: 14,
                    msgs: [
                        {
                            id: 1,
                            msg: "まずは盤面を紙などに書いてみましょう。",
                        },
                        {
                            id: 2,
                            msg: "数字を入力できるものです。",
                        },
                        {
                            id: 3,
                            msg:
                                "スマホなどでよく見る形ですね。たびたび出てきたようにその場所でEnterを押しましょう。",
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        filteredHint: function () {
            var rltStage = this.hintMsg.filter(
                (stage) => stage.id === this.isShow.stage.num
            );
            var rltMsgs = rltStage[0].msgs.filter(
                (msgs) => msgs.id <= this.isShow.msg.num
            );
            return rltMsgs;
        },
    },
    methods: {
        showThisHint(stageNum) {
            if (stageNum == this.isShow.stage.num) {
                this.isShow.msg.num++;
            } else {
                this.isShow.stage.num = stageNum;
                this.isShow.msg.num = 1;
            }
            console.log(this.isShow.msg.num);
        },
    },
}
</script>

