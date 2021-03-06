import React from 'react';
import { Row, Col, Typography, Tag, Image } from 'antd';
import moment from 'moment';

import styles from './Initiatives.less';

const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.AUDITME_DEV_BE_URL
    : process.env.AUDITME_PROD_BE_URL;

function InitiativeInfo({ item }) {
  return (
    <>
      <Row style={{ marginTop: '15px' }}>
        <Col col={12} style={{ marginRight: '15px' }}>
          Date:{' '}
          <Typography.Text strong>{moment(item.date).format('Do MMMM, YYYY')}</Typography.Text>
        </Col>
        <Col col={12} style={{ marginRight: '15px' }}>
          Week: <Typography.Text strong>{item.week ? item.week : 'N/A'}</Typography.Text>
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col col={8} style={{ marginRight: '15px' }}>
          Area Manager:{' '}
          <Typography.Text strong>{item.areaManager ? item.areaManager : 'N/A'}</Typography.Text>
        </Col>
        <Col col={8} style={{ marginRight: '15px' }}>
          Regional Manager:{' '}
          <Typography.Text strong>
            {item.regionalManager ? item.regionalManager : 'N/A'}
          </Typography.Text>
        </Col>
        <Col col={8}>
          Business Excellence Team:{' '}
          <Typography.Text strong>{item.userName ? item.userName : 'N/A'}</Typography.Text>
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col col={8}>
          Type:{' '}
          <Tag>
            <Typography.Text strong>{item.type}</Typography.Text>
          </Tag>
        </Col>
        <Col col={8}>
          Region:{' '}
          <Tag>
            <Typography.Text strong>{item.region ? item.region : 'N/A'}</Typography.Text>
          </Tag>
        </Col>
        <Col col={8}>
          Station/BE#:{' '}
          <Typography.Text strong>
            {item.stationNumber ? item.stationNumber : 'N/A'}
          </Typography.Text>
        </Col>
      </Row>
      <Row style={{ marginTop: '15px' }}>
        <Col col={24}>
          Initiative Details:{' '}
          <Typography.Text strong>{item.details ? item.details : 'N/A'}</Typography.Text>
        </Col>
      </Row>

      {/* Evidences Before */}
      <Row style={{ marginBottom: '5px', marginTop: '15px' }}>
        <Col>Evidences Before: </Col>
      </Row>
      <Row gutter={[2, 2]}>
        {item.evidencesBefore.length > 0 ? (
          item.evidencesBefore.map((image) => (
            <Col key={image} span={8} className={styles.issue_image_container}>
              <Image src={URL + image} width="90%" className={styles.issue_image} />
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Typography.Text strong>No image available</Typography.Text>
          </Col>
        )}
      </Row>

      {/* Evidences After */}
      <Row style={{ marginBottom: '5px', marginTop: '15px' }}>
        <Col>Evidences After: </Col>
      </Row>
      <Row gutter={[2, 2]} className={styles.issue_image_row}>
        {item.evidencesAfter.length > 0 ? (
          item.evidencesAfter.map((image) => (
            <Col key={image} span={8} className={styles.issue_image_container}>
              <Image src={URL + image} width="90%" className={styles.issue_image} />
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Typography.Text strong>No image available</Typography.Text>
          </Col>
        )}
      </Row>
    </>
  );
}

export default InitiativeInfo;
