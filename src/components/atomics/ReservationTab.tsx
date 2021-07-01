import React from 'react';
import '../../styles/Header.scss';
import '../../styles/Page.scss';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const ReservationTab: React.FC = () => {
  return (
    <>
    <div className="tab-reservation">
      <Tabs defaultActiveKey="1" >
        <TabPane tab="연습실 예약하기" key="1">
          연습실 예약 현황
        </TabPane>
        <TabPane tab="예약 내역" key="2">
          예약 등록 및 취소 내역
        </TabPane>
        <TabPane tab="이용 방법" key="3">
          연습실 이용 방법
        </TabPane>
      </Tabs>
    </div>
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Room 1" key="1">
        </TabPane>
        <TabPane tab="Room 2" key="2">
        </TabPane>
        <TabPane tab="Room 3" key="3">
        </TabPane>
        <TabPane tab="Room 4" key="4">
        </TabPane>
      </Tabs>
    </>
    </>
  );
}

export default ReservationTab;