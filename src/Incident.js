import React from 'react';
import { Block } from 'baseui/block';
import { Button, SIZE, KIND } from 'baseui/button';
import {
    Label1,
    Paragraph1,
  } from 'baseui/typography';

const Incident = ({ date, status, location }) => (
    <Block backgroundColor="#F7F7F7">
        <Block display="flex" justifyContent="space-between" alignItems="center" padding="scale800">
            <Block display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <Block display="flex">
                    <Label1 paddingRight="scale600">13. 4. 2019</Label1>
                    <Label1 paddingRight="scale600">Ongoing service outage in Amsterdam</Label1>
                    <Label1 paddingRight="scale600">(ID: AMS-12-CDF)</Label1>
                </Block>
                <Paragraph1 maxWidth="800px">
                    Some of the servers are without a power supply. We are experiencing a large-scale power outage due to a fire inside the datacenter. Follow this thread for more info.
                </Paragraph1>
            </Block>
            <Button>Edit</Button>
        </Block>
        <Block display="flex" padding="scale800">
            <Block paddingRight="scale600">
                <Label1>IMPACT</Label1>
                <Label1>All servers in this location</Label1>
            </Block>
            <Block paddingRight="scale600">
                <Label1>Start</Label1>
                <Label1>9. 4. 2019</Label1>
                <Label1>6:00 GMT+7</Label1>
            </Block>
            <Block paddingRight="scale600">
                <Label1>End</Label1>
                <Label1>9. 4. 2019</Label1>
                <Label1>6:00 GMT+7</Label1>
            </Block>
            <Block paddingRight="scale600">
                <Block display="flex">
                    <Label1 paddingRight="scale400">SENT BY EMAIL</Label1>
                    <Label1>YES</Label1>
                </Block>
                <Block display="flex">
                    <Label1 paddingRight="scale400">ANNOUNCED START</Label1>
                    <Label1>YES</Label1>
                </Block>
                <Block display="flex">
                    <Label1 paddingRight="scale400">ANNOUNCED END</Label1>
                    <Label1>NO</Label1>
                </Block>
            </Block>
        </Block>
        <Block display="flex" justifyContent="space-between" alignItems="center" backgroundColor="#E7E7E7" padding="scale800">
            <Label1>Event timeline</Label1>
            <Button size={SIZE.compact}>Add timeline item</Button>
        </Block>
        <Block display="flex" justifyContent="space-between" alignItems="center" padding="scale800">
            <Label1>9. 4., 6:14 GMT+7</Label1>
            <Paragraph1>We're investigating the issue</Paragraph1>
            <Button kind={KIND.secondary}>Edit</Button>
        </Block>
    </Block>
  );

export default Incident;
