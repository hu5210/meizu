/*
Navicat MySQL Data Transfer

Source Server         : error-prone
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-06-17 21:05:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `togo`
-- ----------------------------
DROP TABLE IF EXISTS `togo`;
CREATE TABLE `togo` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  `pice` int(10) DEFAULT NULL,
  `title` varchar(10) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `titl` varchar(100) DEFAULT NULL,
  `xin` varchar(10) DEFAULT NULL,
  `urls` varchar(500) CHARACTER SET utf8 COLLATE utf8_sinhala_ci DEFAULT NULL,
  `shu` int(100) DEFAULT NULL,
  `jian` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `app` varchar(50) CHARACTER SET utf8 COLLATE utf8_hungarian_ci DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of togo
-- ----------------------------
INSERT INTO `togo` VALUES ('1', 'https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png', '1699', '魅族16XS', '2019-06-10 22:46:08', '4800W AI三摄 | 屏幕下指纹', '优惠卷', 'https://openfile.meizu.com/group1/M00/06/D3/Cgbj0VvQPm-AU7iSAAN3TL0zCwc952.png680x680.jpg', '39', 'https://openfile.meizu.com/group1/M00/06/C2/Cgbj0FvQPkyAeA3jAAlxckyWpiE392.png680x680.jpg', '满1699减100');
INSERT INTO `togo` VALUES ('2', 'https://fms.res.meizu.com/dms/2019/05/08/954933d2-79f5-48c8-af8f-d7568a614166.png', '1299', '魅族16s', '2019-06-11 09:54:00', '骁龙855 4800W光学防抖', '优惠卷', 'https://openfile.meizu.com/group1/M00/07/2B/Cgbj0Vy9cyWAWRixAAPvnU1hKGw908.png680x680.jpg', '29', 'https://openfile.meizu.com/group1/M00/07/2B/Cgbj0Vy9cyCAJAcTAARYGDQG_LQ316.png680x680.jpg', '满1299减100');
INSERT INTO `togo` VALUES ('3', 'https://fms.res.meizu.com/dms/2019/06/06/dffc2c8d-1729-4430-9873-815ee1264bfa.jpg', '1699', '魅族Note9', '2019-06-11 09:55:21', '骁龙845 屏幕下指纹', '优惠卷', 'https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZLSAUAkdAANZKmXVu-g519.png680x680.jpg', '23', 'https://openfile.meizu.com/group1/M00/07/03/Cgbj0Fx_ZLqAOAZ7AAN4onnA0GY381.png680x680.jpg', '满699减100');
INSERT INTO `togo` VALUES ('4', 'https://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png', '1199', '魅族EP52耳机', '2019-06-11 09:57:22', '轻盈月悦耳 dongw', '优惠卷', 'https://openfile.meizu.com/group1/M00/01/E0/Cgbj0Vmb55mADEtFAAEhCZocsP8456.png680x680.jpg', '56', 'https://openfile.meizu.com/group1/M00/01/E0/Cgbj0Vmb55yALEgQAAJce6x8m1A568.png680x680.jpg', '满1199减100');
INSERT INTO `togo` VALUES ('5', 'https://openfile.meizu.com/group1/M00/04/0B/Cgbj0FrcbkeAW38NAAjvsXhhyFE066.png', '1966', '魅族15', '2019-06-11 20:52:38', '骁龙660 2000万暗光双摄', '优惠卷', 'https://openfile.meizu.com/group1/M00/04/0A/Cgbj0FrcbkKAbf63AAXVQzrAU6E631.png680x680.jpg', '10', 'https://openfile.meizu.com/group1/M00/04/19/Cgbj0VrcbkKAUTagAAG14T9MUOI402.png680x680.jpg', '1966减100');
INSERT INTO `togo` VALUES ('6', 'https://openfile.meizu.com/group1/M00/07/3F/Cgbj0Vzt9L6AGWGwAA0JvJu7FS0814.png', '3598', '魅族 16s 白夜童', '2019-06-11 20:55:17', '以梦为马 乘风破浪', '优惠卷', 'https://openfile.meizu.com/group1/M00/07/27/Cgbj0Fzt9L6ANK9XAAituxHJPnE439.png680x680.jpg', '30', 'https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png680x680.jpg', '满3598减500');
INSERT INTO `togo` VALUES ('7', 'https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png', '1596', '魅族 16 X', '2019-06-11 20:56:04', '骁龙710 屏幕下指纹 旗舰双摄', '优惠卷', 'https://openfile.meizu.com/group1/M00/06/8B/Cgbj0FuhuRuAIaA_AAZ2zJxTzvE796.png680x680.jpg', '10', 'https://openfile.meizu.com/group1/M00/06/8B/Cgbj0FuhuRSAb5gFAAbE_1LV5J4607.png680x680.jpg', '满1596减100');
INSERT INTO `togo` VALUES ('8', 'https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png', '1298', '魅族 X8', '2019-06-11 20:57:52', '人脸指纹双解锁 旗舰双摄', '优惠卷', 'https://openfile.meizu.com/group1/M00/06/B6/Cgbj0VusSJeAVPgvAAaYP_FCAkM778.png680x680.jpg', '20', 'https://openfile.meizu.com/group1/M00/06/A8/Cgbj0FusSJ-AGjX5AAeYgVZv2Ic125.png680x680.jpg', '满699减100');
