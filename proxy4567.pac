function FindProxyForURL(url, host) {

if(isPlainHostName(host)||
// Novatek Doamin Direct
dnsDomainIs(host,".novatek.com.tw")||
dnsDomainIs(host,".novatek.com.cn")||
// Online Meeting Direct
dnsDomainIs(host,".webex.com")||
dnsDomainIs(host,"nvt.webex.com")||
dnsDomainIs(host,"nvt1.webex.com")||
dnsDomainIs(host,".wbx2.com")||
dnsDomainIs(host,"meet.google.com")||
dnsDomainIs(host,".accompany.com")||
dnsDomainIs(host,".amplitude.com")||
dnsDomainIs(host,".appdynamics.com")||
dnsDomainIs(host,".cisco.com")||
dnsDomainIs(host,".wbx2.com")||
dnsDomainIs(host,".ciscospark.com")||
dnsDomainIs(host,".data.logentries.com")||
dnsDomainIs(host,".digicert.com")||
dnsDomainIs(host,".eum-appdynamics.com")||
dnsDomainIs(host,".giphy.com")||
dnsDomainIs(host,".identrust.com")||
dnsDomainIs(host,".sli.do")||
dnsDomainIs(host,".slido.com")||
dnsDomainIs(host,".sparkpostmail.com")||
dnsDomainIs(host,".sparkpostmail1.com")||
dnsDomainIs(host,".vbrickrev.com")||
dnsDomainIs(host,".walkme.com")||
dnsDomainIs(host,".webexcontent.com")||
dnsDomainIs(host,"s3.walkmeusercontent.com")||
dnsDomainIs(host,"boe.bizvideo.cn")||
// Tread Micro Direct
dnsDomainIs(host,".trendmicro.com")||
dnsDomainIs(host,".activeupdate.trendmicro.com")||
dnsDomainIs(host,".activeupdate.trendmicro.com.edgekey.net")||
// Defender Windows & Liunx Direct
dnsDomainIs(host,".automatedirstrprdcus.blob.core.windows.net")||
dnsDomainIs(host,".automatedirstrprdcus3.blob.core.windows.net")||
dnsDomainIs(host,".automatedirstrprdeus.blob.core.windows.net")||
dnsDomainIs(host,".automatedirstrprdeus3.blob.core.windows.net")||
dnsDomainIs(host,".unitedstates.x.cp.wd.microsoft.com")||
dnsDomainIs(host,".us-v20.events.data.microsoft.com")||
dnsDomainIs(host,".us.vortex-win.data.microsoft.com")||
dnsDomainIs(host,".ussus1eastprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus1westprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus2eastprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus2westprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus3eastprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus3westprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus4eastprod.blob.core.windows.net")||
dnsDomainIs(host,".ussus4westprod.blob.core.windows.net")||
dnsDomainIs(host,".winatp-gw-cus.microsoft.com")||
dnsDomainIs(host,".winatp-gw-cus3.microsoft.com")||
dnsDomainIs(host,".winatp-gw-eus.microsoft.com")||
dnsDomainIs(host,".winatp-gw-eus3.microsoft.com")||
dnsDomainIs(host,".wsus1eastprod.blob.core.windows.net")||
dnsDomainIs(host,".wsus1westprod.blob.core.windows.net")||
dnsDomainIs(host,".wsus2eastprod.blob.core.windows.net")||
dnsDomainIs(host,".wsus2westprod.blob.core.windows.net")||
// O365 Sharepoint Direct
dnsDomainIs(host,".sharepoint.com")||
dnsDomainIs(host,"ssw.live.com")||
dnsDomainIs(host,".search.production.apac.trafficmanager.net")||
dnsDomainIs(host,".search.production.emea.trafficmanager.net")||
dnsDomainIs(host,".search.production.us.trafficmanager.net")||
dnsDomainIs(host,".wns.windows.com")||
dnsDomainIs(host,"admin.onedrive.com")||
dnsDomainIs(host,"officeclient.microsoft.com")||
dnsDomainIs(host,"g.live.com")||
dnsDomainIs(host,"oneclient.sfx.ms")||
dnsDomainIs(host,".sharepointonline.com")||
dnsDomainIs(host,"spoprod-a.akamaihd.net")||
dnsDomainIs(host,".svc.ms")||
// O365 Teams Direct
dnsDomainIs(host,"login.live.com")||
dnsDomainIs(host,"mlccdn.blob.core.windows.net")||
dnsDomainIs(host,".streaming.mediaservices.windows.net")||
dnsDomainIs(host,".secure.skypeassets.com")||
dnsDomainIs(host,"mlccdnprod.azureedge.net")||
dnsDomainIs(host,"teams.microsoft.com")||
dnsDomainIs(host,".teams.microsoft.com")||
dnsDomainIs(host,".lync.com")||
dnsDomainIs(host,"broadcast.skype.com")||
dnsDomainIs(host,".broadcast.skype.com")||
dnsDomainIs(host,".sfbassets.com")||
dnsDomainIs(host,".keydelivery.mediaservices.windows.net")||
dnsDomainIs(host,"aka.ms")||
dnsDomainIs(host,".users.storage.live.com")||
dnsDomainIs(host,".adl.windows.com")||
dnsDomainIs(host,".skypeforbusiness.com")||
dnsDomainIs(host,".mstea.ms")||
dnsDomainIs(host,".skype.com")||
dnsDomainIs(host,".ecdn.microsoft.com")||
dnsDomainIs(host,"compass-ssl.microsoft.com")||
// O365 Office Online Direct
dnsDomainIs(host,".officeapps.live.com")||
dnsDomainIs(host,".office.net")||
dnsDomainIs(host,".onenote.com")||
dnsDomainIs(host,"cdn.onenote.net")||
dnsDomainIs(host,"ajax.aspnetcdn.com")||
dnsDomainIs(host,".auth.microsoft.com")||
dnsDomainIs(host,".hip.live.com")||
dnsDomainIs(host,"account.office.net")||
dnsDomainIs(host,".portal.cloudappsecurity.com")||
dnsDomainIs(host,".aria.microsoft.com")||
dnsDomainIs(host,".o365weve.com")||
dnsDomainIs(host,".office365.com")||
dnsDomainIs(host,".aadrm.com")||
dnsDomainIs(host,"o15.officeredir.microsoft.com")||
dnsDomainIs(host,"activation.sls.microsoft.com")||
dnsDomainIs(host,"crl.microsoft.com")||
dnsDomainIs(host,"office15client.microsoft.com")||
dnsDomainIs(host,"go.microsoft.com")||
dnsDomainIs(host,"officecdn.microsoft.com")||
dnsDomainIs(host,".entrust.net")||
dnsDomainIs(host,".manage.microsoft.com")||
dnsDomainIs(host,".office.com")||
dnsDomainIs(host,"cdnprod.myanalytics.microsoft.com")||
dnsDomainIs(host,".azure-apim.net")||
dnsDomainIs(host,".activity.windows.com")||
dnsDomainIs(host,"ocsp.int-x3.letsencrypt.org")||
dnsDomainIs(host,".cortana.ai")||
dnsDomainIs(host,"admin.microsoft.com")||
dnsDomainIs(host,"cdn.odc.officeapps.live.com")||
dnsDomainIs(host,".online.office.com")||
dnsDomainIs(host,"apis.live.net")||
dnsDomainIs(host,".msftidentity.com")||
dnsDomainIs(host,".microsoftonline.com")||
dnsDomainIs(host,".protection.office.com")||
dnsDomainIs(host,".events.data.microsoft.com")||
dnsDomainIs(host,"amp.azure.net")||
dnsDomainIs(host,".azurerms.com")||
dnsDomainIs(host,"officepreviewredir.microsoft.com")||
dnsDomainIs(host,"officeclient.microsoft.com")||
dnsDomainIs(host,"officecdn.microsoft.com.edgesuite.net")||
dnsDomainIs(host,".geotrust.com")||
dnsDomainIs(host,"www.microsoft365.com")||
dnsDomainIs(host,"myanalytics.microsoft.com")||
dnsDomainIs(host,".flow.microsoft.com")||
dnsDomainIs(host,"activity.windows.com")||
dnsDomainIs(host,"cdn.uci.officeapps.live.com")||
dnsDomainIs(host,"office.live.com")||
dnsDomainIs(host,"officeapps.live.com")||
dnsDomainIs(host,".msidentity.com")||
dnsDomainIs(host,".microsoftonline-p.com")||
dnsDomainIs(host,".security.microsoft.com")||
dnsDomainIs(host,"appsforoffice.microsoft.com")||
dnsDomainIs(host,".informationprotection.azure.com")||
dnsDomainIs(host,"officeredir.microsoft.com")||
dnsDomainIs(host,".omniroot.com")||
dnsDomainIs(host,"myanalytics-gcc.microsoft.com")||
dnsDomainIs(host,".powerapps.com")||
dnsDomainIs(host,"www.onedrive.com")||
dnsDomainIs(host,"account.activedirectory.windowsazure.com")||
dnsDomainIs(host,".msauth.net")||
dnsDomainIs(host,"compliance.microsoft.com")||
dnsDomainIs(host,"assets.onestore.ms")||
dnsDomainIs(host,"ecn.dev.virtualearth.net")||
dnsDomainIs(host,"r.office.microsoft.com")||
dnsDomainIs(host,".public-trust.com")||
dnsDomainIs(host,"accounts.accesscontrol.windows.net")||
dnsDomainIs(host,"adminwebservice.microsoftonline.com")||
dnsDomainIs(host,"api.passwordreset.microsoftonline.com")||
dnsDomainIs(host,"autologon.microsoftazuread-sso.com")||
dnsDomainIs(host,"becws.microsoftonline.com")||
dnsDomainIs(host,"ccs.login.microsoftonline.com")||
dnsDomainIs(host,"clientconfig.microsoftonline-p.net")||
dnsDomainIs(host,"companymanager.microsoftonline.com")||
dnsDomainIs(host,"device.login.microsoftonline.com")||
dnsDomainIs(host,"graph.microsoft.com")||
dnsDomainIs(host,"graph.windows.net")||
dnsDomainIs(host,"login.microsoft.com")||
dnsDomainIs(host,"login.microsoftonline.com")||
dnsDomainIs(host,"login.microsoftonline-p.com")||
dnsDomainIs(host,"login.windows.net")||
dnsDomainIs(host,"logincert.microsoftonline.com")||
dnsDomainIs(host,"loginex.microsoftonline.com")||
dnsDomainIs(host,"login-us.microsoftonline.com")||
dnsDomainIs(host,"nexus.microsoftonline-p.com")||
dnsDomainIs(host,"passwordreset.microsoftonline.com")||
dnsDomainIs(host,"provisioningapi.microsoftonline.com")||
dnsDomainIs(host,".msauthimages.net")||
dnsDomainIs(host,".msecnd.net")||
dnsDomainIs(host,".msftauth.net")||
dnsDomainIs(host,".msftauthimages.net")||
dnsDomainIs(host,".phonefactor.net")||
dnsDomainIs(host,"enterpriseregistration.windows.net")||
dnsDomainIs(host,"management.azure.com")||
dnsDomainIs(host,"policykeyservice.dc.ad.msft.net")||
dnsDomainIs(host,"defender.microsoft.com")||
dnsDomainIs(host,"protection.office.com")||
dnsDomainIs(host,"security.microsoft.com")||
dnsDomainIs(host,"auth.gfx.ms")||
dnsDomainIs(host,"c1.microsoft.com")||
dnsDomainIs(host,"dgps.support.microsoft.com")||
dnsDomainIs(host,"docs.microsoft.com")||
dnsDomainIs(host,"msdn.microsoft.com")||
dnsDomainIs(host,"platform.linkedin.com")||
dnsDomainIs(host,"prod.msocdn.com")||
dnsDomainIs(host,"shellprod.msocdn.com")||
dnsDomainIs(host,"support.microsoft.com")||
dnsDomainIs(host,"technet.microsoft.com")||
dnsDomainIs(host,"informationprotection.hosting.portal.azure.net")||
dnsDomainIs(host,".symcb.com")||
dnsDomainIs(host,".symcd.com")||
dnsDomainIs(host,".verisign.com")||
dnsDomainIs(host,".verisign.net")||
dnsDomainIs(host,"apps.identrust.com")||
dnsDomainIs(host,"cacerts.digicert.com")||
dnsDomainIs(host,"cert.int-x3.letsencrypt.org")||
dnsDomainIs(host,"crl.globalsign.com")||
dnsDomainIs(host,"crl.globalsign.net")||
dnsDomainIs(host,"crl.identrust.com")||
dnsDomainIs(host,"crl3.digicert.com")||
dnsDomainIs(host,"crl4.digicert.com")||
dnsDomainIs(host,"isrg.trustid.ocsp.identrust.com")||
dnsDomainIs(host,"mscrl.microsoft.com")||
dnsDomainIs(host,"ocsp.digicert.com")||
dnsDomainIs(host,"ocsp.globalsign.com")||
dnsDomainIs(host,"ocsp.msocsp.com")||
dnsDomainIs(host,"ocsp2.globalsign.com")||
dnsDomainIs(host,"ocspx.digicert.com")||
dnsDomainIs(host,"secure.globalsign.com")||
dnsDomainIs(host,"www.digicert.com")||
dnsDomainIs(host,"www.microsoft.com")||
// Outlook Direct
dnsDomainIs(host,"mobile.pipe.aria.microsoft.com")||
// Notion
dnsDomainIs(host,"www.notion.so")||
// O365 Sharepoint IP Direct
isInNet(host,"13.107.136.0","255.255.252.0")||
isInNet(host,"40.108.128.0","255.254.0.0")||
isInNet(host,"52.104.0.0","255.252.0.0")||
isInNet(host,"104.146.128.0","255.255.128.0")||
isInNet(host,"150.171.40.0","255.255.252.0")||
// O365 Teams IP Direct
isInNet(host,"13.107.64.0","255.255.192.0")||
isInNet(host,"52.112.0.0","255.252.0.0")||
isInNet(host,"52.122.0.0","255.254.0.0")||
isInNet(host,"52.238.119.141","255.255.255.255")||
isInNet(host,"52.244.160.207","255.255.255.255")||
// O365 Office Online IP Direct
isInNet(host,"13.107.6.171","255.255.255.255")||
isInNet(host,"13.107.18.15","255.255.255.255")||
isInNet(host,"13.107.140.6","255.255.255.255")||
isInNet(host,"52.108.0.0","255.252.0.0")||
isInNet(host,"52.244.37.168","255.255.255.255")||
isInNet(host,"20.190.128.0","255.255.192.0")||
isInNet(host,"40.126.0.0","255.255.192.0")||
// Internal IP Range
isInNet(host,"172.20.0.0","255.255.0.0")||
isInNet(host,"192.168.0.0","255.255.0.0")||
isInNet(host,"172.21.0.0","255.255.0.0")||
isInNet(host,"172.22.0.0","255.255.0.0")||
isInNet(host,"172.26.0.0","255.255.0.0")||
isInNet(host,"172.27.0.0","255.255.0.0")||
isInNet(host,"172.16.0.0","255.255.0.0")||
isInNet(host,"172.17.0.0","255.255.0.0")||
isInNet(host,"10.168.10.0","255.255.255.0")||
isInNet(host,"10.168.20.0","255.255.255.0")||
isInNet(host,"10.169.10.0","255.255.255.0")||
isInNet(host,"127.0.0.0","255.255.255.0")||
isInNet(host,"10.35.0.0","255.255.0.0"))
  {
        return "DIRECT";
  }
if(
// Customer Website
dnsDomainIs(host,"hjobview.tsmc.com")||
dnsDomainIs(host,"online.tsmc.com")||
dnsDomainIs(host,"jobview.tsmc.com.tw")||
dnsDomainIs(host,"az.onlinedl.tsmc.com")||
dnsDomainIs(host,"ectonline.tsmc.com")||
dnsDomainIs(host,"dst.tsmc.com")||
dnsDomainIs(host,"rjdv2.psmc.com.tw")||
dnsDomainIs(host,"ijdv.tce.com.tw")||
dnsDomainIs(host,"rjdv2.psmc.photronics.com")||
dnsDomainIs(host,"openjdv2.semi-dnp.jp")||
dnsDomainIs(host,"rjdv.psmc.com.tw")||
dnsDomainIs(host,"gix.innolux.com.tw")||
dnsDomainIs(host,"online.vis.com.tw")||
dnsDomainIs(host,"tnts01.chipmos.com")||
dnsDomainIs(host,"tnts02.chipmos.com")||
dnsDomainIs(host,"citrix2.kltech.com.cn")||
dnsDomainIs(host,"custrs.kyec.com.tw")||
dnsDomainIs(host,"sslvpn.lblusem.com")||
dnsDomainIs(host,"vpnhk.chipmos.com")||
dnsDomainIs(host,"engweb.chipbond.com.tw")||
dnsDomainIs(host,"custrs2.kyec.com.tw")||
dnsDomainIs(host,"adc.gttw.com.tw")||
dnsDomainIs(host,"afy.cj-elec.com")||
dnsDomainIs(host,"citrix.kltech.com.cn")||
dnsDomainIs(host,"citrix.pather.com.tw")||
dnsDomainIs(host,"cust.kyec.com.tw")||
dnsDomainIs(host,"psa.itsturnkey.com")||
dnsDomainIs(host,"remote.steco.co.kr")||
dnsDomainIs(host,"ssl.ytec.com.tw")||
dnsDomainIs(host,"sslvpn.winstek.com.tw")||
dnsDomainIs(host,"sslvpn2.chipmore.com.cn")||
dnsDomainIs(host,"sslvpn.chipmore.com.cn")||
dnsDomainIs(host,"www.jcetglobal.com")||
dnsDomainIs(host,".secbuy.com")||
dnsDomainIs(host,"teraras.terapower.com.tw")||
dnsDomainIs(host,"teraras01.terapower.com.tw")||
dnsDomainIs(host,"hcvpn.chipmos.com")||
dnsDomainIs(host,"solvnet.synopsys.com")||
dnsDomainIs(host,"synopsyssolvnetplusprod.112.2o7.net")||
dnsDomainIs(host,"ejdv.smics.com")||
dnsDomainIs(host,"solvnetplus.synopsys.com")||
dnsDomainIs(host,"lbsssl.lbsemicon.com")||
dnsDomainIs(host,"www.istgroup.com")||
dnsDomainIs(host,"sslvpn.markdesperado.net")||
dnsDomainIs(host,"ximvpn.tfme.com")||
dnsDomainIs(host,"ximvpn-655.tfme.com")||
dnsDomainIs(host,"sslvpn.greatek.com.tw")||
dnsDomainIs(host,"afy.jcetglobal.com")||
dnsDomainIs(host,"ctx.tfme.com")||
dnsDomainIs(host,"tvjira.hisense.com")||
isInNet(host,"202.126.64.32","255.255.255.255")||
isInNet(host,"202.39.250.39","255.255.255.255")||
isInNet(host,"211.20.115.43","255.255.255.255")||
isInNet(host,"60.248.237.144","255.255.255.255")||
isInNet(host,"202.126.64.67","255.255.255.255"))
  {
        return "DIRECT";
  }

if(
dnsDomainIs(host,"odxc.twse.com.tw")||
dnsDomainIs(host,"watersnet.com.tw")||
dnsDomainIs(host,"teams.microsoft.com")||
dnsDomainIs(host,"mlccdnprod.azureedge.net")||
dnsDomainIs(host,"mlccdn.blob.core.windows.net")||
dnsDomainIs(host,"compass-ssl.microsoft.com")||
dnsDomainIs(host,"aka.ms")||
dnsDomainIs(host,".users.storage.live.com")||
dnsDomainIs(host,".teams.microsoft.com")||
dnsDomainIs(host,".streaming.mediaservices.windows.net")||
dnsDomainIs(host,".skypeforbusiness.com")||
dnsDomainIs(host,".skype.com")||
dnsDomainIs(host,".sfbassets.com")||
dnsDomainIs(host,".secure.skypeassets.com")||
dnsDomainIs(host,".mstea.ms")||
dnsDomainIs(host,".msedge.net")||
dnsDomainIs(host,".lync.com")||
dnsDomainIs(host,".keydelivery.mediaservices.windows.net")||
dnsDomainIs(host,".adl.windows.com")||
isInNet(host,"13.107.64.0","255.255.192.0")||
isInNet(host,"52.112.0.0","255.252.0.0")||
isInNet(host,"52.120.0.0","255.252.0.0")||
isInNet(host,"52.238.119.141","255.255.255.255")||
isInNet(host,"52.244.160.207","255.255.255.255"))
  {
        return "DIRECT";
  }

if (
// Meeting Room IP
isInNet(myIpAddress(), "172.17.120.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.17.121.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.17.122.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.17.123.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.17.96.0", "255.255.254.0"))
  {
        return "DIRECT";
  }

if (
// Special IP
isInNet(myIpAddress(), "172.20.86.56", "255.255.255.255"))
  {
        return "DIRECT";
  }

if (
// CN IP Limit
dnsDomainIs(host,"rd-mokadisplay.tcl.com"))
  {
       return "PROXY 172.21.10.210:80";
  }

if(
// Limit Source IP
dnsDomainIs(host,"vip.104.com.tw")||
dnsDomainIs(host,"pbox.powerchip.com")||
dnsDomainIs(host,"spdlybra.nintendo.co.jp")||
dnsDomainIs(host,"thor.vestel.com.tr")||
dnsDomainIs(host,"svn.vestel.com.tr")||
dnsDomainIs(host,"rdpm.vestel.com.tr"))
  {
       return "PROXY 172.20.254.218:8080; PROXY 172.20.255.2:8080" ;
  }

if(
// Limit Source IP-2
dnsDomainIs(host,"github.ecodesamsung.com"))
  {
       return "PROXY 172.20.254.218:8080" ;
  }

if (
isInNet(myIpAddress(), "172.20.88.217", "255.255.255.255"))
  {
       return "PROXY 172.20.254.218:8080" ;
  } 

if (
isInNet(myIpAddress(), "172.20.88.0", "255.255.255.0"))
  {
       return "PROXY 172.20.254.218:8080" ;
  } 

if (
isInNet(myIpAddress(), "172.22.1.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.21.0.0", "255.255.0.0")||
isInNet(myIpAddress(), "172.20.3.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.17.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.60.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.70.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.104.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.110.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.111.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.112.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.113.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.114.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.115.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.116.0", "255.255.255.0")||
isInNet(myIpAddress(), "172.20.117.0", "255.255.255.0"))
  {
       return "PROXY 172.20.254.218:8080; PROXY 172.20.255.2:8080" ;
  }

// Source IP-TY1F-7F
if (
isInNet(myIpAddress(), "172.20.128.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.132.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.136.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.140.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.144.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.148.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.152.0", "255.255.252.0"))
  {
       return "PROXY 172.20.255.86:8080; PROXY 172.20.255.2:8080" ;
  }  

// Source IP-TY8-11F
if (
isInNet(myIpAddress(), "172.20.156.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.160.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.164.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.168.0", "255.255.252.0"))
  {
       return "PROXY 172.20.255.2:8080; PROXY 172.20.258.86:8080" ;
  }  



if (
isInNet(myIpAddress(), "172.20.176.0", "255.255.248.0")||
isInNet(myIpAddress(), "172.20.92.0", "255.255.252.0")||
isInNet(myIpAddress(), "172.20.96.0", "255.255.248.0")||
isInNet(myIpAddress(), "172.20.80.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.82.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.84.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.86.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.88.0", "255.255.254.0")||
isInNet(myIpAddress(), "172.20.90.0", "255.255.254.0"))
  {
       return "PROXY 192.168.254.222:8080; PROXY 172.20.255.2:8080" ;
  }
        return "DIRECT";
}
