//
//  EchoPlugin.swift
//  App
//
//  Created by Elliott Davies on 16/03/2023.
//

import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve(["value": value])
    }
}
