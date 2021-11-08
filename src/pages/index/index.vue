<template>
    <view class="index">
        <view class="header">
            <image class="banner" mode="aspectFill" src='../../assets/imgs/banner.jpg' />
            <view class="mask"></view>
            <view class="userinfo">
                <nut-avatar size="large" icon="../../assets/imgs/avatar.png"></nut-avatar>
                <text class="userinfo-text">我是胖虎</text>
            </view>
        </view>
        <view class="main-index" v-if="action === 0">
            <view style="margin-bottom: 10px">
                <text class="main-title">转成喵语</text>
            </view>
            <nut-input placeholder="输入想对喵喵说的话" label="铲屎官:" v-model="msg" clearable max-length="10" />
            <nut-button class="main-btn mgt20" block type="info" @click="playVoice">转换并播放
            </nut-button>
        </view>

        <view class="main-index" v-else-if="action === 1">
            <view style="margin-bottom: 10px">
                <text class="main-title">翻译喵语</text>
            </view>
            <nut-button class="main-btn mgt20" block type="info" icon="microphone" @click="handleRecord">
                {{msg3}}
            </nut-button>
            <view v-if="!recording && recordText">
                <view class="voice-view mgt20" @click="playRecordSrc">
                    <text>{{recordDuration}}''</text>
                </view>
                <view class="voice-view mgt20 voice-view-text">
                    <text>{{recordText}}</text>
                </view>
            </view>
        </view>

        <view class="main-index" v-else-if="action===2">
            <view style="margin-bottom: 10px">
                <text class="main-title">个人中心</text>
            </view>
        </view>

        <nut-toast :msg="msg2" v-model:visible="show" :type="type" :cover="cover" />
        <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa" :bottom="true" @tab-switch="tabSwitch">
            <nut-tabbar-item tab-title="首页" icon="home" key="home"></nut-tabbar-item>
            <nut-tabbar-item tab-title="喵语" icon="service" key="service"></nut-tabbar-item>
            <nut-tabbar-item tab-title="我的" icon="my2" key="my2"></nut-tabbar-item>
        </nut-tabbar>
    </view>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import Taro from "@tarojs/taro";
export default {
    name: "Index",
    components: {},
    setup() {
        const state = reactive({
            msg: "",
            msg2: "",
            type: "text",
            show: false,
            cover: false,
            voice: [
                require("../../assets/voice/1.mp3"),
                require("../../assets/voice/2.mp3"),
                require("../../assets/voice/3.mp3"),
                require("../../assets/voice/4.mp3"),
            ],
            catText: [
                "铲屎的，我饿了",
                "主人陪我玩一下嘛",
                "摸摸我吧",
                "主人求抱抱",
                "我想吃零食了",
                "我要玩具",
            ],
        });
        // 音频播放
        const innerAudioContext = Taro.createInnerAudioContext();
        Taro.setInnerAudioOption({
            obeyMuteSwitch: false,
        });

        const playVoice = () => {
            if (!state.msg.length) {
                state.msg2 = "输入想对喵喵说的话";
                state.show = true;
                return;
            }
            let tempFilePath = "";
            if (state.msg.length < 5) {
                tempFilePath = state.voice[Math.round(Math.random() * 2)];
            } else {
                tempFilePath = state.voice[3];
            }
            Taro.playVoice({
                filePath: tempFilePath,
                complete() {
                    state.msg2 = "播放完成";
                    state.show = true;
                },
            });
        };

        const action = ref(0);
        const tabSwitch = (val) => {
            action.value = val.index;
        };

        // 录音
        const msg3 = ref("开始录音");
        let recording = ref(false);
        let recordSrc = "";
        const recordDuration = ref(0);
        const recordText = ref("");
        const recorderManager = Taro.getRecorderManager();
        recorderManager.onStart(() => {
            console.log("recorder start");
        });
        recorderManager.onStop((res) => {
            console.log("recorder stop", res);
            const { tempFilePath, duration } = res;
            innerAudioContext.src = recordSrc = tempFilePath;
            innerAudioContext.play();
            recordDuration.value = Math.ceil(duration / 1000);
            recordText.value = state.catText[Math.round(Math.random() * 6)];
        });
        // 点击录音，再点击结束
        const handleRecord = () => {
            if (!recording.value) {
                msg3.value = "录音中，点击停止";
                recordText.value = "";
                recording.value = true;
                recorderManager.start();
            } else {
                recorderManager.stop();
                msg3.value = "开始录音";
                recording.value = false;
            }
        };

        const playRecordSrc = () => {
            innerAudioContext.src = recordSrc;
            innerAudioContext.play();
        };

        // 长按录音，松手结束
        // const handleLongpress = () => {
        //     msg3.value = "录音中，点击停止";
        //     recordText.value = "";
        //     recording.value = true;
        //     recorderManager.start();
        // };
        // const touchEnd = () => {
        //     console.log("end");
        //     recorderManager.stop();
        //     msg3.value = "开始录音";
        //     recording.value = false;
        // };

        return {
            ...toRefs(state),
            playVoice,
            action,
            tabSwitch,
            msg3,
            recording,
            recordDuration,
            recordText,
            handleRecord,
            playRecordSrc,
        };
    },
};
</script>

<style lang="scss">
.index {
    padding: 0;
}
.header {
    position: relative;
    justify-content: center;
}
.banner {
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
}
.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
}
.userinfo {
    position: absolute;
    width: 80%;
    left: 30px;
    top: 50%;
    margin-top: -30px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.userinfo-text {
    color: #fff;
    font-size: 18px;
    margin-left: 15px;
}
.main-index {
    padding: 30px 20px;
}
.main-title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}
.voice-view {
    width: 40%;
    height: 35px;
    background-color: #f1f1f1;
    line-height: 35px;
    padding-left: 10px;
    border-radius: 5px;
}
.mgt20 {
    margin-top: 20px;
}
.voice-view-text {
    width: auto;
    min-width: 20%;
}
</style>
