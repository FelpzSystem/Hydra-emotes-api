import requests, os, psutil, sys, jwt, pickle, json, binascii, time, urllib3, base64, re, socket, threading, ssl, asyncio, random, hmac, hashlib, string
from datetime import date
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from flask import Flask, request, jsonify, send_from_directory
from datetime import datetime
from threading import Thread
import threading
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from Pb2 import DEcwHisPErMsG_pb2, MajoRLoGinrEs_pb2, PorTs_pb2, MajoRLoGinrEq_pb2, sQ_pb2, Team_msg_pb2
from xC4 import *
from xHeaders import equie_emote  # noqa

import aiohttp

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# === IN-MEMORY CONFIG ===
TASKS_CONFIG = [
    {"id": "task1", "name": "JOIN TELEGRAM CHANNEL", "link": "https://t.me/axemoteserver"},
    {"id": "task2", "name": "JOIN 2d TELEGRAM", "link": "https://t.me/axromjanyt"},
    {"id": "task3", "name": "SUBSCRIBE YOUTUBE", "link": "https://www.youtube.com/@axromjan"},
]

SETTINGS_CONFIG = {
    "maintenance": "off",
    "telegram": "https://t.me/axemoteserver"
}

# === FF SERVER LIST (all regions) ===
FF_SERVERS = [
    {"name": "🇧🇩 Bangladesh (BD)", "region": "BD", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇮🇳 India (IND)", "region": "IND", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇸🇬 Singapore (SG)", "region": "SG", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇲🇾 Malaysia (MY)", "region": "MY", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇮🇩 Indonesia (ID)", "region": "ID", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇹🇭 Thailand (TH)", "region": "TH", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇵🇭 Philippines (PH)", "region": "PH", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇵🇰 Pakistan (PK)", "region": "PK", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇧🇷 Brazil (BR)", "region": "BR", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇺🇸 North America (NA)", "region": "NA", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇲🇽 Latin America (LATAM)", "region": "LATAM", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇸🇦 Middle East (ME)", "region": "ME", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇹🇷 Turkey (TR)", "region": "TR", "login_url": "https://loginbp.ggpolarbear.com"},
    {"name": "🇷🇺 Russia (RU)", "region": "RU", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇪🇺 Europe (EU)", "region": "EU", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🌍 Africa (AF)", "region": "AF", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇻🇳 Vietnam (VN)", "region": "VN", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇯🇵 Japan (JP)", "region": "JP", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇰🇷 Korea (KR)", "region": "KR", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇨🇳 China (CN)", "region": "CN", "login_url": "https://loginbp.ggblueshark.com"},
    {"name": "🇹🇼 Taiwan (TW)", "region": "TW", "login_url": "https://loginbp.ggblueshark.com"},
]

# === MULTI USER BOT STORAGE ===
user_bots = {}

# === VISIT COUNTER (file-based) ===
VISITS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'visits.json')

def load_visits():
    try:
        with open(VISITS_FILE, 'r') as f:
            return json.load(f)
    except:
        return {"total": 0, "today": 0, "date": str(date.today())}

def save_visits(v):
    try:
        with open(VISITS_FILE, 'w') as f:
            json.dump(v, f)
    except:
        pass

def record_visit():
    v = load_visits()
    today = str(date.today())
    v["total"] = v.get("total", 0) + 1
    if v.get("date") != today:
        v["date"] = today
        v["today"] = 1
    else:
        v["today"] = v.get("today", 0) + 1
    save_visits(v)
    return v

# === GLOBAL EVENT LOOP ===
_global_loop = None
_loop_ready = threading.Event()

def start_global_loop():
    global _global_loop
    _global_loop = asyncio.new_event_loop()
    asyncio.set_event_loop(_global_loop)
    _loop_ready.set()
    _global_loop.run_forever()

_loop_thread = Thread(target=start_global_loop, daemon=False)
_loop_thread.start()
_loop_ready.wait(timeout=10)
time.sleep(0.3)

# === FLASK APP ===
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, 'static')
app = Flask(__name__, static_folder=STATIC_DIR)

# === MAIN REQUEST HEADERS ===
Hr = {
    'User-Agent': "Dalvik/2.1.0 (Linux; U; Android 11; ASUS_Z01QD Build/PI)",
    'Connection': "Keep-Alive",
    'Accept-Encoding': "gzip",
    'Content-Type': "application/x-www-form-urlencoded",
    'Expect': "100-continue",
    'X-Unity-Version': "2018.4.11f1",
    'X-GA': "v1 1",
    'ReleaseVersion': "OB53"
}

# === CRYPTO ===
async def encrypted_proto(encoded_hex):
    key = b'Yg&tc%DEuh6%Zc^8'
    iv = b'6oyZDr22E3ychjM%'
    cipher = AES.new(key, AES.MODE_CBC, iv)
    return cipher.encrypt(pad(encoded_hex, AES.block_size))

# === FIX equie_emote ===
async def equie_emote_fixed(JWT, base_url):
    url = f"{base_url}/ChooseEmote"
    headers = {
        "Accept-Encoding": "gzip",
        "Authorization": f"Bearer {JWT}",
        "Connection": "Keep-Alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Expect": "100-continue",
        "ReleaseVersion": "OB53",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; G011A Build/PI)",
        "X-GA": "v1 1",
        "X-Unity-Version": "2018.4.11f1",
    }
    data = bytes.fromhex("CAF683222A25C7BEFEB51F59544DB313")
    try:
        response = await asyncio.to_thread(requests.post, url, headers=headers, data=data, timeout=10, verify=False)
        print(f"[equie_emote] status={response.status_code}")
        return response.status_code == 200
    except Exception as e:
        print(f"[equie_emote] Error: {e}")
        return False

# =====================================================================
# === GUEST ID GENERATOR (from Gen zip) ===
# =====================================================================
HEX_KEY = "2ee44819e9b4598845141067b281621874d0d5d7af9d8f7e00c1e54715b7d1e3"
GEN_KEY = bytes.fromhex(HEX_KEY)

REGISTER_URL = "https://100067.connect.garena.com/api/v2/oauth/guest:register"
TOKEN_URL = "https://100067.connect.garena.com/api/v2/oauth/guest/token:grant"

def generate_custom_password():
    return ''.join(random.choice('0123456789ABCDEF') for _ in range(64))

def generate_random_name():
    exponent_digits = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
                       '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'}
    number = random.randint(1, 99999)
    number_str = f"{number:05d}"
    exponent_str = ''.join(exponent_digits[d] for d in number_str)
    return f"AX-ROM{exponent_str}"

def E_AEs(pc):
    Z = bytes.fromhex(pc)
    key = bytes([89, 103, 38, 116, 99, 37, 68, 69, 117, 104, 54, 37, 90, 99, 94, 56])
    iv = bytes([54, 111, 121, 90, 68, 114, 50, 50, 69, 51, 121, 99, 104, 106, 77, 37])
    cipher = AES.new(key, AES.MODE_CBC, iv)
    ciphertext = cipher.encrypt(pad(Z, AES.block_size))
    return ciphertext

async def EnC_Vr(N):
    if N < 0:
        return b''
    H = []
    while True:
        BesTo = N & 0x7F
        N >>= 7
        if N:
            BesTo |= 0x80
        H.append(BesTo)
        if not N:
            break
    return bytes(H)

async def CrEaTe_VarianT(field_number, value):
    field_header = (field_number << 3) | 0
    return await EnC_Vr(field_header) + await EnC_Vr(value)

async def CrEaTe_LenGTh(field_number, value):
    field_header = (field_number << 3) | 2
    encoded_value = value.encode() if isinstance(value, str) else value
    return await EnC_Vr(field_header) + await EnC_Vr(len(encoded_value)) + encoded_value

async def CrEaTe_ProTo(fields):
    packet = bytearray()
    for field, value in fields.items():
        if isinstance(value, dict):
            nested_packet = await CrEaTe_ProTo(value)
            packet.extend(await CrEaTe_LenGTh(field, nested_packet))
        elif isinstance(value, int):
            packet.extend(await CrEaTe_VarianT(field, value))
        elif isinstance(value, (str, bytes)):
            packet.extend(await CrEaTe_LenGTh(field, value))
    return packet

def guest_register():
    password = generate_custom_password()
    payload = {"app_id": 100067, "client_type": 2, "password": password, "source": 2}
    body_json = json.dumps(payload, separators=(',', ':'))
    signature = hmac.new(GEN_KEY, body_json.encode(), hashlib.sha256).hexdigest()
    headers = {
        "User-Agent": "GarenaMSDK/4.0.39(SM-A325M ;Android 13;en;HK;)",
        "Authorization": f"Signature {signature}",
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json",
        "Connection": "Keep-Alive",
        "Host": "100067.connect.garena.com"
    }
    resp = requests.post(REGISTER_URL, headers=headers, data=body_json, timeout=30, verify=False)
    if resp.status_code != 200:
        raise Exception(f"Register failed: HTTP {resp.status_code}")
    data = resp.json()
    if data.get("code") != 0:
        raise Exception(f"Register error: {data}")
    uid = data['data']['uid']
    return uid, password

def guest_token(uid, password):
    payload = {
        "client_id": 100067,
        "client_secret": HEX_KEY,
        "client_type": 2,
        "password": password,
        "response_type": "token",
        "uid": uid
    }
    body_json = json.dumps(payload, separators=(',', ':'))
    signature = hmac.new(GEN_KEY, body_json.encode(), hashlib.sha256).hexdigest()
    headers = {
        "User-Agent": "GarenaMSDK/4.0.39(SM-A325M ;Android 13;en;HK;)",
        "Authorization": f"Signature {signature}",
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json",
        "Connection": "Keep-Alive",
        "Host": "100067.connect.garena.com"
    }
    resp = requests.post(TOKEN_URL, headers=headers, data=body_json, timeout=30, verify=False)
    if resp.status_code != 200:
        raise Exception(f"Token failed: HTTP {resp.status_code}")
    data = resp.json()
    if data.get("code") != 0:
        raise Exception(f"Token error: {data}")
    access_token = data['data']['access_token']
    open_id = data['data']['open_id']
    return access_token, open_id

async def major_register_gen(access_token, open_id, name, lang="en", login_url="https://loginbp.ggpolarbear.com"):
    keystream = [0x30, 0x30, 0x30, 0x32, 0x30, 0x31, 0x37, 0x30, 0x30, 0x30, 0x30, 0x30, 0x32, 0x30, 0x31, 0x37,
                 0x30, 0x30, 0x30, 0x30, 0x30, 0x32, 0x30, 0x31, 0x37, 0x30, 0x30, 0x30, 0x30, 0x30, 0x32, 0x30]
    encoded_open_id = ""
    for i, ch in enumerate(open_id):
        encoded_open_id += chr(ord(ch) ^ keystream[i % len(keystream)])
    field14 = encoded_open_id.encode('latin1')
    payload_fields = {
        1: name,
        2: access_token,
        3: open_id,
        5: 102000007,
        6: 4,
        7: 1,
        13: 1,
        14: field14,
        15: lang,
        16: 1,
        17: 1
    }
    proto_bytes = await CrEaTe_ProTo(payload_fields)
    encrypted_payload = E_AEs(bytes(proto_bytes).hex())
    host = login_url.replace("https://", "").replace("http://", "")
    MAJOR_REGISTER_URL = f"{login_url}/MajorRegister"
    headers = {
        "Accept-Encoding": "gzip",
        "Authorization": "Bearer",
        "Connection": "Keep-Alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Expect": "100-continue",
        "Host": host,
        "ReleaseVersion": "OB53",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; ASUS_I005DA Build/PI)",
        "X-GA": "v1 1",
        "X-Unity-Version": "2018.4.11f1"
    }
    resp = requests.post(MAJOR_REGISTER_URL, headers=headers, data=encrypted_payload, verify=False, timeout=30)
    if resp.status_code != 200:
        raise Exception(f"MajorRegister failed: HTTP {resp.status_code}")
    return True

async def generate_guest_id(region="BD", login_url="https://loginbp.ggpolarbear.com"):
    """Generate a new guest ID for the given region and return (uid, password, open_id, access_token)"""
    print(f"[GenGuest] Registering new guest for region={region}")
    uid, password = await asyncio.to_thread(guest_register)
    print(f"[GenGuest] UID={uid}")
    access_token, open_id = await asyncio.to_thread(guest_token, uid, password)
    print(f"[GenGuest] access_token={access_token[:15]}... open_id={open_id}")
    name = generate_random_name()
    await major_register_gen(access_token, open_id, name, lang="en", login_url=login_url)
    print(f"[GenGuest] Registered name={name}")
    return str(uid), password, open_id, access_token

# =====================================================================
# === ORIGINAL LOGIN/BOT FUNCTIONS ===
# =====================================================================

async def GeNeRaTeAccEss(uid, password):
    url = "https://100067.connect.garena.com/oauth/guest/token/grant"
    headers = {
        "Host": "100067.connect.garena.com",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 9; ASUS_I005DA Build/PI)",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "close"
    }
    data = {
        "uid": str(uid),
        "password": str(password),
        "response_type": "token",
        "client_type": "2",
        "client_secret": HEX_KEY,
        "client_id": "100067"
    }
    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(url, headers=headers, data=data, timeout=aiohttp.ClientTimeout(total=15)) as response:
                text = await response.text()
                print(f"[GeNeRaTeAccEss] status={response.status} response={text[:200]}")
                if response.status != 200:
                    return None, None
                d = json.loads(text)
                open_id = d.get("open_id")
                access_token = d.get("access_token")
                if not open_id or not access_token:
                    return None, None
                return open_id, access_token
    except Exception as e:
        print(f"[GeNeRaTeAccEss] Exception: {e}")
        return None, None

async def EncRypTMajoRLoGin(open_id, access_token):
    major_login = MajoRLoGinrEq_pb2.MajorLogin()
    major_login.event_time = str(datetime.now())[:-7]
    major_login.game_name = "free fire"
    major_login.platform_id = 1
    major_login.client_version = "1.123.1"
    major_login.system_software = "Android OS 9 / API-28 (PQ3B.190801.10101846/G9650ZHU2ARC6)"
    major_login.system_hardware = "Handheld"
    major_login.telecom_operator = "Verizon"
    major_login.network_type = "WIFI"
    major_login.screen_width = 1920
    major_login.screen_height = 1080
    major_login.screen_dpi = "280"
    major_login.processor_details = "ARM64 FP ASIMD AES VMH | 2865 | 4"
    major_login.memory = 3003
    major_login.gpu_renderer = "Adreno (TM) 640"
    major_login.gpu_version = "OpenGL ES 3.1 v1.46"
    major_login.unique_device_id = "Google|34a7dcdf-a7d5-4cb6-8d7e-3b0e448a0c57"
    major_login.client_ip = "223.191.51.89"
    major_login.language = "en"
    major_login.open_id = open_id
    major_login.open_id_type = "4"
    major_login.device_type = "Handheld"
    memory_available = major_login.memory_available
    memory_available.version = 55
    memory_available.hidden_value = 81
    major_login.access_token = access_token
    major_login.platform_sdk_id = 1
    major_login.network_operator_a = "Verizon"
    major_login.network_type_a = "WIFI"
    major_login.client_using_version = "7428b253defc164018c604a1ebbfebdf"
    major_login.external_storage_total = 36235
    major_login.external_storage_available = 31335
    major_login.internal_storage_total = 2519
    major_login.internal_storage_available = 703
    major_login.game_disk_storage_available = 25010
    major_login.game_disk_storage_total = 26628
    major_login.external_sdcard_avail_storage = 32992
    major_login.external_sdcard_total_storage = 36235
    major_login.login_by = 3
    major_login.library_path = "/data/app/com.dts.freefireth-YPKM8jHEwAJlhpmhDhv5MQ==/lib/arm64"
    major_login.reg_avatar = 1
    major_login.library_token = "5b892aaabd688e571f688053118a162b|/data/app/com.dts.freefireth-YPKM8jHEwAJlhpmhDhv5MQ==/base.apk"
    major_login.channel_type = 3
    major_login.cpu_type = 2
    major_login.cpu_architecture = "64"
    major_login.client_version_code = "2019118695"
    major_login.graphics_api = "OpenGLES2"
    major_login.supported_astc_bitset = 16383
    major_login.login_open_id_type = 4
    major_login.analytics_detail = b"FwQVTgUPX1UaUllDDwcWCRBpWAUOUgsvA1snWlBaO1kFYg=="
    major_login.loading_time = 13564
    major_login.release_channel = "android"
    major_login.extra_info = "KqsHTymw5/5GB23YGniUYN2/q47GATrq7eFeRatf0NkwLKEMQ0PK5BKEk72dPflAxUlEBir6Vtey83XqF593qsl8hwY="
    major_login.android_engine_init_flag = 110009
    major_login.if_push = 1
    major_login.is_vpn = 1
    major_login.origin_platform_type = "4"
    major_login.primary_platform_type = "4"
    return await encrypted_proto(major_login.SerializeToString())

async def MajorLogin(payload, login_url="https://loginbp.ggblueshark.com"):
    url = f"{login_url}/MajorLogin"
    ssl_ctx = ssl.create_default_context()
    ssl_ctx.check_hostname = False
    ssl_ctx.verify_mode = ssl.CERT_NONE
    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=payload, headers=Hr, ssl=ssl_ctx, timeout=aiohttp.ClientTimeout(total=15)) as response:
                print(f"[MajorLogin] status={response.status}")
                if response.status == 200:
                    return await response.read()
                return None
    except Exception as e:
        print(f"[MajorLogin] Exception: {e}")
        return None

async def GetLoginData(base_url, payload, token):
    url = f"{base_url}/GetLoginData"
    ssl_ctx = ssl.create_default_context()
    ssl_ctx.check_hostname = False
    ssl_ctx.verify_mode = ssl.CERT_NONE
    h = dict(Hr)
    h['Authorization'] = f"Bearer {token}"
    try:
        async with aiohttp.ClientSession() as session:
            async with session.post(url, data=payload, headers=h, ssl=ssl_ctx, timeout=aiohttp.ClientTimeout(total=15)) as response:
                print(f"[GetLoginData] status={response.status}")
                if response.status == 200:
                    return await response.read()
                return None
    except Exception as e:
        print(f"[GetLoginData] Exception: {e}")
        return None

async def DecRypTMajoRLoGin(data):
    proto = MajoRLoGinrEs_pb2.MajorLoginRes()
    proto.ParseFromString(data)
    return proto

async def DecRypTLoGinDaTa(data):
    proto = PorTs_pb2.GetLoginData()
    proto.ParseFromString(data)
    return proto

async def xAuThSTarTuP(TarGeT, token, timestamp, key, iv):
    uid_hex = hex(TarGeT)[2:]
    uid_length = len(uid_hex)
    encrypted_timestamp = await DecodE_HeX(timestamp)
    encrypted_account_token = token.encode().hex()
    encrypted_packet = await EnC_PacKeT(encrypted_account_token, key, iv)
    encrypted_packet_length = hex(len(encrypted_packet) // 2)[2:]
    if uid_length == 9: headers = '0000000'
    elif uid_length == 8: headers = '00000000'
    elif uid_length == 10: headers = '000000'
    elif uid_length == 7: headers = '000000000'
    else: headers = '0000000'
    return f"0115{headers}{uid_hex}{encrypted_timestamp}00000{encrypted_packet_length}{encrypted_packet}"

async def SEndPacKeT(OnLinE, ChaT, TypE, PacKeT):
    try:
        if TypE == 'ChaT' and ChaT:
            ChaT.write(PacKeT)
            await ChaT.drain()
        elif TypE == 'OnLine' and OnLinE:
            OnLinE.write(PacKeT)
            await OnLinE.drain()
    except Exception as e:
        print(f"[SEndPacKeT] error: {e}")

# === TCP CONNECTIONS ===
async def TcPOnLine_user(ip, port, key, iv, AutHToKen, bot_data, reconnect_delay=1.0):
    while True:
        try:
            reader, writer = await asyncio.open_connection(ip, int(port))
            bot_data['online_writer'] = writer
            writer.write(bytes.fromhex(AutHToKen))
            await writer.drain()
            try:
                fs_pkt = await FS(key, iv)
                writer.write(fs_pkt)
                await writer.drain()
                print(f"[TcPOnLine] FS lobby packet sent for uid={bot_data['uid']}")
            except Exception as e:
                print(f"[TcPOnLine] FS packet error: {e}")
            print(f"[TcPOnLine] Connected for uid={bot_data['uid']}")
            while True:
                data2 = await reader.read(9999)
                if not data2:
                    break
                if data2.hex().startswith('0500') and len(data2.hex()) > 1000:
                    try:
                        packet = await DeCode_PackEt(data2.hex()[10:])
                        packet = json.loads(packet)
                        OwNer_UiD, CHaT_CoDe, _ = await GeTSQDaTa(packet)
                        JoinCHaT = await AutH_Chat(3, OwNer_UiD, CHaT_CoDe, key, iv)
                        whisper = bot_data.get('whisper_writer')
                        if whisper:
                            await SEndPacKeT(whisper, whisper, 'ChaT', JoinCHaT)
                    except:
                        pass
            writer.close()
            await writer.wait_closed()
            bot_data['online_writer'] = None
        except Exception as e:
            print(f"[TcPOnLine] Error: {e}")
            bot_data['online_writer'] = None
        await asyncio.sleep(reconnect_delay)

async def TcPChaT_user(ip, port, AutHToKen, key, iv, LoGinData, ready_event, region, bot_data, reconnect_delay=1.0):
    while True:
        try:
            reader, writer = await asyncio.open_connection(ip, int(port))
            bot_data['whisper_writer'] = writer
            writer.write(bytes.fromhex(AutHToKen))
            await writer.drain()
            ready_event.set()
            if getattr(LoGinData, 'Clan_ID', None):
                pK = await AuthClan(LoGinData.Clan_ID, LoGinData.Clan_Compiled_Data, key, iv)
                writer.write(pK)
                await writer.drain()
            print(f"[TcPChaT] Connected for uid={bot_data['uid']}")
            while True:
                data = await reader.read(9999)
                if not data:
                    break
            writer.close()
            await writer.wait_closed()
            bot_data['whisper_writer'] = None
        except Exception as e:
            print(f"[TcPChaT] Error: {e}")
            bot_data['whisper_writer'] = None
        await asyncio.sleep(reconnect_delay)

# === BOT STARTUP ===
async def StartUserBot(uid_str, password, login_url="https://loginbp.ggblueshark.com", _preauth_open_id=None, _preauth_access_token=None):
    bot_data = {
        'uid': uid_str,
        'online_writer': None,
        'whisper_writer': None,
        'key': None, 'iv': None, 'region': None,
        'status': 'connecting',
        'in_squad': False,
        'squad_join_time': None,
        'squad_team_code': None,
        'auto_leave_task': None,
    }

    print(f"[StartUserBot] Starting for uid={uid_str}")

    # Use pre-generated credentials if provided (random guest flow), else fetch fresh
    if _preauth_open_id and _preauth_access_token:
        open_id = _preauth_open_id
        access_token = _preauth_access_token
        print(f"[StartUserBot] Using pre-auth token for uid={uid_str}")
    else:
        open_id, access_token = await GeNeRaTeAccEss(uid_str, password)
        if not open_id or not access_token:
            bot_data['status'] = 'invalid_credentials'
            return bot_data, "Invalid credentials - Check UID and Password"

    print(f"[StartUserBot] Got access token for uid={uid_str}")

    PyL = await EncRypTMajoRLoGin(open_id, access_token)
    MajorRes = await MajorLogin(PyL, login_url)
    if not MajorRes:
        bot_data['status'] = 'banned'
        return bot_data, "Account banned or not registered"

    MajoRAuth = await DecRypTMajoRLoGin(MajorRes)
    UrL = MajoRAuth.url
    region = MajoRAuth.region
    ToKen = MajoRAuth.token
    TarGeT = MajoRAuth.account_uid
    key = MajoRAuth.key
    iv = MajoRAuth.iv
    timestamp = MajoRAuth.timestamp

    bot_data['key'] = key
    bot_data['iv'] = iv
    bot_data['region'] = region
    bot_data['account_uid'] = int(TarGeT)

    print(f"[StartUserBot] MajorLogin OK, region={region}, uid={TarGeT}")

    LoGinDaTa = await GetLoginData(UrL, PyL, ToKen)
    if not LoGinDaTa:
        bot_data['status'] = 'login_data_error'
        return bot_data, "Error getting connection ports"

    LoGinDaTaDecoded = await DecRypTLoGinDaTa(LoGinDaTa)
    OnLinePorTs = LoGinDaTaDecoded.Online_IP_Port
    ChaTPorTs = LoGinDaTaDecoded.AccountIP_Port
    OnLineiP, OnLineporT = OnLinePorTs.split(":")
    ChaTiP, ChaTporT = ChaTPorTs.split(":")

    try:
        await equie_emote_fixed(ToKen, UrL)
    except Exception as e:
        print(f"[equie_emote] Warning: {e}")

    AutHToKen = await xAuThSTarTuP(int(TarGeT), ToKen, int(timestamp), key, iv)
    ready_event = asyncio.Event()

    asyncio.create_task(
        TcPChaT_user(ChaTiP, ChaTporT, AutHToKen, key, iv, LoGinDaTaDecoded, ready_event, region, bot_data)
    )
    await asyncio.wait_for(ready_event.wait(), timeout=10)
    await asyncio.sleep(1)
    asyncio.create_task(
        TcPOnLine_user(OnLineiP, OnLineporT, key, iv, AutHToKen, bot_data)
    )

    bot_data['status'] = 'online'

    try:
        _bn = random.choice(list(AUTO_BUNDLE_IDS.keys()))
        _bid = AUTO_BUNDLE_IDS[_bn]
        _cached_pkt = await bundle_packet_async(_bid, key, iv, region)
        bot_data['cached_bundle_pkt'] = _cached_pkt
        bot_data['cached_bundle_name'] = _bn
        print(f"[StartUserBot] Bundle pre-cached: '{_bn}' ({_bid})")
    except Exception as _ce:
        bot_data['cached_bundle_pkt'] = None
        bot_data['cached_bundle_name'] = None
        print(f"[StartUserBot] Bundle cache error (non-fatal): {_ce}")

    print(f"[StartUserBot] Bot ONLINE for uid={uid_str}")
    return bot_data, "success"

# === GENERATE GUEST AND START BOT ===
# === GUEST ID JSON SAVE/LOAD ===
GUEST_ID_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "guest_ids")
os.makedirs(GUEST_ID_DIR, exist_ok=True)

# === GITHUB AUTO-PUSH CONFIG (from environment variables) ===
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
GITHUB_REPO  = os.environ.get("GITHUB_REPO", "")   # e.g. "yourusername/ff-guest-ids"
GITHUB_BRANCH = os.environ.get("GITHUB_BRANCH", "main")

def _github_push_file(region, data):
    """Push region JSON file to GitHub repo via API"""
    if not GITHUB_TOKEN or not GITHUB_REPO:
        return
    try:
        filename = f"{region.lower()}.json"
        api_url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{filename}"
        headers = {
            "Authorization": f"token {GITHUB_TOKEN}",
            "Accept": "application/vnd.github.v3+json"
        }
        # Check if file exists to get sha
        sha = None
        r = requests.get(api_url, headers=headers, timeout=10)
        if r.status_code == 200:
            sha = r.json().get("sha")
        # Prepare content
        content_bytes = json.dumps(data, indent=2).encode("utf-8")
        content_b64 = base64.b64encode(content_bytes).decode("utf-8")
        payload = {
            "message": f"Update {filename}",
            "content": content_b64,
            "branch": GITHUB_BRANCH
        }
        if sha:
            payload["sha"] = sha
        resp = requests.put(api_url, headers=headers, json=payload, timeout=10)
        if resp.status_code in (200, 201):
            print(f"[GithubPush] {filename} pushed OK")
        else:
            print(f"[GithubPush] Failed: {resp.status_code} {resp.text[:100]}")
    except Exception as e:
        print(f"[GithubPush] Error: {e}")

def _github_pull_file(region):
    """Pull region JSON file from GitHub repo via API"""
    if not GITHUB_TOKEN or not GITHUB_REPO:
        return None
    try:
        filename = f"{region.lower()}.json"
        api_url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{filename}"
        headers = {
            "Authorization": f"token {GITHUB_TOKEN}",
            "Accept": "application/vnd.github.v3+json"
        }
        r = requests.get(api_url, headers=headers, timeout=10)
        if r.status_code == 200:
            content_b64 = r.json().get("content", "")
            content = base64.b64decode(content_b64).decode("utf-8")
            return json.loads(content)
    except Exception as e:
        print(f"[GithubPull] Error: {e}")
    return None

def save_guest_id(region, uid, password):
    """Save guest id+password to region JSON file and push to GitHub"""
    filepath = os.path.join(GUEST_ID_DIR, f"{region.lower()}.json")
    try:
        # Try to pull latest from GitHub first
        gh_data = _github_pull_file(region)
        if gh_data:
            data = gh_data
            # Also update local file
            with open(filepath, 'w') as f:
                json.dump(data, f, indent=2)
        elif os.path.exists(filepath):
            with open(filepath, 'r') as f:
                data = json.load(f)
        else:
            data = {"region": region, "accounts": []}
        # Avoid duplicates
        for acc in data["accounts"]:
            if acc["uid"] == str(uid):
                return
        data["accounts"].append({"uid": str(uid), "password": password})
        # Save locally
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2)
        print(f"[GuestSave] Saved uid={uid} to {region.lower()}.json")
        # Push to GitHub
        _github_push_file(region, data)
    except Exception as e:
        print(f"[GuestSave] Error saving: {e}")

def load_guest_ids(region):
    """Load saved guest ids - first from GitHub, fallback to local file"""
    # Try GitHub first (most up to date)
    gh_data = _github_pull_file(region)
    if gh_data:
        accounts = gh_data.get("accounts", [])
        # Update local cache
        filepath = os.path.join(GUEST_ID_DIR, f"{region.lower()}.json")
        try:
            with open(filepath, 'w') as f:
                json.dump(gh_data, f, indent=2)
        except:
            pass
        print(f"[GuestLoad] Loaded {len(accounts)} accounts from GitHub for region={region}")
        return accounts
    # Fallback to local file
    filepath = os.path.join(GUEST_ID_DIR, f"{region.lower()}.json")
    try:
        if os.path.exists(filepath):
            with open(filepath, 'r') as f:
                data = json.load(f)
            return data.get("accounts", [])
    except Exception as e:
        print(f"[GuestLoad] Error loading local: {e}")
    return []

async def GenerateAndStartBot(region="BD"):
    """Generate a fresh guest ID for the given region, save it, and start a bot"""
    # Find login_url for region
    login_url = "https://loginbp.ggblueshark.com"
    for srv in FF_SERVERS:
        if srv["region"] == region:
            login_url = srv["login_url"]
            break

    print(f"[GenerateAndStartBot] Generating guest ID for region={region}, login_url={login_url}")
    uid, password, open_id, access_token = await generate_guest_id(region, login_url=login_url)
    print(f"[GenerateAndStartBot] Generated UID={uid}, now starting bot...")

    # Save guest ID to region JSON file
    await asyncio.to_thread(save_guest_id, region, uid, password)

    bot_data, msg = await StartUserBot(uid, password, login_url, _preauth_open_id=open_id, _preauth_access_token=access_token)

    # If bot failed to connect, try with saved IDs from JSON
    if bot_data.get('status') not in ('online', 'connecting'):
        print(f"[GenerateAndStartBot] Fresh start failed ({msg}), trying saved IDs...")
        saved = await asyncio.to_thread(load_guest_ids, region)
        for acc in reversed(saved):
            s_uid = acc["uid"]
            s_pwd = acc["password"]
            if s_uid == uid:
                continue  # skip the one we just tried
            print(f"[GenerateAndStartBot] Retrying with saved uid={s_uid}")
            bot_data2, msg2 = await StartUserBot(s_uid, s_pwd, login_url)
            if bot_data2.get('status') in ('online', 'connecting'):
                print(f"[GenerateAndStartBot] Saved ID worked: uid={s_uid}")
                return bot_data2, msg2, s_uid
        print(f"[GenerateAndStartBot] All saved IDs failed too.")

    return bot_data, msg, uid

# === AUTO BUNDLE IDS ===
AUTO_BUNDLE_IDS = {
    "rampage":     "914000002",
    "cannibal":    "914000003",
    "devil":       "914038001",
    "scorpio":     "914039001",
    "frostfire":   "914042001",
    "paradox":     "914044001",
    "naruto":      "914047001",
    "aurora":      "914047002",
    "midnight":    "914048001",
    "itachi":      "914050001",
    "dreamspace":  "914051001",
}

async def Look_Changer(bundle_id, key, iv, look_type=1, region="ind"):
    try:
        fields = {
            1: 88,
            2: {
                1: {
                    1: int(bundle_id),
                    2: look_type
                },
                2: 2
            }
        }
        packet = await CrEaTe_ProTo(fields)
        packet_hex = packet.hex()
        encrypted = await EnC_PacKeT(packet_hex, key, iv)
        header_length = len(encrypted) // 2
        header_length_hex = await DecodE_HeX(header_length)
        if region.lower() == "ind":
            packet_type = "0514"
        elif region.lower() == "bd":
            packet_type = "0519"
        else:
            packet_type = "0515"
        if len(header_length_hex) == 2:
            final_header = f"{packet_type}000000"
        elif len(header_length_hex) == 3:
            final_header = f"{packet_type}00000"
        elif len(header_length_hex) == 4:
            final_header = f"{packet_type}0000"
        elif len(header_length_hex) == 5:
            final_header = f"{packet_type}000"
        else:
            final_header = f"{packet_type}000000"
        return bytes.fromhex(final_header + header_length_hex + encrypted)
    except Exception as e:
        print(f"[Look_Changer] error: {e}")
        return None

async def bundle_packet_async(bundle_id, key, iv, region="ind"):
    try:
        return await Look_Changer(int(bundle_id), key, iv, look_type=1, region=region)
    except Exception as e:
        print(f"[bundle_packet_async] error: {e}")
        return None

async def _refresh_bundle_cache(bot_data):
    key = bot_data.get('key')
    iv = bot_data.get('iv')
    region = bot_data.get('region', 'ind')
    try:
        prev = bot_data.get('cached_bundle_name')
        choices = [b for b in AUTO_BUNDLE_IDS.keys() if b != prev]
        if not choices:
            choices = list(AUTO_BUNDLE_IDS.keys())
        bn = random.choice(choices)
        bid = AUTO_BUNDLE_IDS[bn]
        pkt = await bundle_packet_async(bid, key, iv, region)
        bot_data['cached_bundle_pkt'] = pkt
        bot_data['cached_bundle_name'] = bn
        print(f"[BundleCache] Next bundle ready: '{bn}' ({bid})")
    except Exception as e:
        print(f"[BundleCache] Refresh error (non-fatal): {e}")

async def auto_bundle_changer(bot_data):
    key = bot_data.get('key')
    iv = bot_data.get('iv')
    region = bot_data.get('region', 'ind')
    used_bundles = []
    try:
        while True:
            await asyncio.sleep(15)
            online_writer = bot_data.get('online_writer')
            if not online_writer or online_writer.is_closing():
                break
            try:
                remaining = [b for b in AUTO_BUNDLE_IDS.keys() if b not in used_bundles]
                if not remaining:
                    used_bundles = []
                    remaining = list(AUTO_BUNDLE_IDS.keys())
                bundle_name = random.choice(remaining)
                used_bundles.append(bundle_name)
                bundle_id = AUTO_BUNDLE_IDS[bundle_name]
                bundle_pkt = await bundle_packet_async(bundle_id, key, iv, region)
                if bundle_pkt:
                    online_writer.write(bundle_pkt)
                    await online_writer.drain()
                    print(f"[AutoBundle] Changed to '{bundle_name}' ({bundle_id})")
            except Exception as _e:
                print(f"[AutoBundle] error (non-fatal): {_e}")
    except asyncio.CancelledError:
        print(f"[AutoBundle] Stopped for uid={bot_data.get('uid')}")

async def auto_leave_after_20min(bot_data):
    uid = bot_data.get('uid', '?')
    try:
        await asyncio.sleep(1200)
        online_writer = bot_data.get('online_writer')
        key = bot_data.get('key')
        iv = bot_data.get('iv')
        team_code = bot_data.get('squad_team_code')

        if online_writer and not online_writer.is_closing() and key and iv:
            try:
                if team_code:
                    exit_pkt = await ExiT(int(team_code), key, iv)
                    online_writer.write(exit_pkt)
                    await online_writer.drain()
                fs_pkt = await FS(key, iv)
                online_writer.write(fs_pkt)
                await online_writer.drain()
            except Exception as e:
                print(f"[AutoLeave] Packet error for uid={uid}: {e}")

        bot_data['in_squad'] = False
        bot_data['squad_join_time'] = None
        bot_data['squad_team_code'] = None
        print(f"[AutoLeave] Bot uid={uid} is now SOLO (20min expired)")

        old_task = bot_data.get('auto_bundle_task')
        if old_task and not old_task.done():
            old_task.cancel()
    except asyncio.CancelledError:
        print(f"[AutoLeave] Task cancelled for uid={uid}")

# === EMOTE PERFORM ===
async def perform_emote_for_user(bot_data, team_code, uids, emote_id):
    online_writer = bot_data.get('online_writer')
    key = bot_data.get('key')
    iv = bot_data.get('iv')
    region = bot_data.get('region', 'ind')
    if not online_writer or online_writer.is_closing():
        raise Exception("Bot not connected to online server")

    join_pkt = await GenJoinSquadsPacket(team_code, key, iv)
    online_writer.write(join_pkt)
    await online_writer.drain()
    print(f"[Emote] Join sent → tc={team_code}")

    bot_data['in_squad'] = True
    bot_data['squad_join_time'] = time.time()
    bot_data['squad_team_code'] = team_code

    old_leave_task = bot_data.get('auto_leave_task')
    if old_leave_task and not old_leave_task.done():
        old_leave_task.cancel()
    leave_task = asyncio.get_event_loop().create_task(auto_leave_after_20min(bot_data))
    bot_data['auto_leave_task'] = leave_task

    cached_pkt = bot_data.get('cached_bundle_pkt')
    cached_name = bot_data.get('cached_bundle_name', '?')
    if cached_pkt:
        online_writer.write(cached_pkt)
        await online_writer.drain()
        print(f"[Emote] Bundle '{cached_name}' sent INSTANTLY after join")
    else:
        try:
            _bn = random.choice(list(AUTO_BUNDLE_IDS.keys()))
            _pkt = await bundle_packet_async(AUTO_BUNDLE_IDS[_bn], key, iv, region)
            if _pkt:
                online_writer.write(_pkt)
                await online_writer.drain()
        except Exception as _fe:
            print(f"[Emote] Bundle fallback error: {_fe}")

    asyncio.ensure_future(_refresh_bundle_cache(bot_data))
    await asyncio.sleep(1.5)

    bot_uid = bot_data.get('account_uid', 0)
    for uid_str in uids:
        emote_pkt = await Emote_k(int(uid_str), emote_id, key, iv, region, bot_uid=bot_uid)
        online_writer.write(emote_pkt)
        await online_writer.drain()
        await asyncio.sleep(0.3)

    print(f"[Emote] Done, emote={emote_id} sent to {len(uids)} target(s)")

    old_task = bot_data.get('auto_bundle_task')
    if old_task and not old_task.done():
        old_task.cancel()
    task = asyncio.get_event_loop().create_task(auto_bundle_changer(bot_data))
    bot_data['auto_bundle_task'] = task

    return {"status": "success"}

# === FLASK ROUTES ===

@app.route('/')
def index():
    record_visit()
    return send_from_directory(STATIC_DIR, 'index.html')

@app.route('/style.css')
def css():
    return send_from_directory(STATIC_DIR, 'style.css')

@app.route('/script.js')
def js():
    return send_from_directory(STATIC_DIR, 'script.js')

@app.route('/api/tasks')
def get_tasks():
    return jsonify(TASKS_CONFIG)

@app.route('/api/settings')
def get_settings():
    return jsonify(SETTINGS_CONFIG)

@app.route('/api/ff-servers')
def get_ff_servers():
    """Return all FF game servers for selection"""
    return jsonify(FF_SERVERS)

@app.route('/api/servers')
def get_servers():
    return jsonify([{"name": "AX SERVER BD", "url": "/join"}])

@app.route('/api/generate-and-start', methods=['POST'])
def generate_and_start():
    """Generate a new guest ID for the selected server region and start a bot"""
    data = request.get_json(force=True)
    region = str(data.get('region', 'BD')).strip().upper()

    global _global_loop
    future = asyncio.run_coroutine_threadsafe(GenerateAndStartBot(region), _global_loop)
    try:
        bot_data, msg, uid = future.result(timeout=60)
        if bot_data.get('status') == 'online':
            user_bots[uid] = bot_data
            return jsonify({"status": "success", "message": f"Bot চালু হয়েছে! Region: {region}", "uid": uid})
        else:
            return jsonify({"status": "error", "message": msg})
    except Exception as e:
        print(f"[generate-and-start] Exception: {e}")
        return jsonify({"status": "error", "message": f"সংযোগ ব্যর্থ: {str(e)[:150]}"})

@app.route('/api/submit', methods=['POST'])
def submit_credentials():
    data = request.get_json(force=True)
    uid = str(data.get('uid', '')).strip()
    password = str(data.get('password', '')).strip()
    region = str(data.get('region', 'BD')).strip().upper()

    if not uid or not password:
        return jsonify({"status": "error", "message": "UID এবং Password দিন!"})

    if uid in user_bots and user_bots[uid].get('status') == 'online':
        return jsonify({"status": "already_online", "message": "Bot already running!", "uid": uid})

    login_url = "https://loginbp.ggblueshark.com"
    for srv in FF_SERVERS:
        if srv["region"] == region:
            login_url = srv["login_url"]
            break

    global _global_loop
    future = asyncio.run_coroutine_threadsafe(StartUserBot(uid, password, login_url), _global_loop)
    try:
        bot_data, msg = future.result(timeout=35)
        if bot_data.get('status') == 'online':
            user_bots[uid] = bot_data
            return jsonify({"status": "success", "message": "Bot চালু হয়েছে!", "uid": uid})
        else:
            return jsonify({"status": "error", "message": msg})
    except Exception as e:
        print(f"[submit] Exception: {e}")
        return jsonify({"status": "error", "message": f"সংযোগ ব্যর্থ: {str(e)[:100]}"})

@app.route('/join')
def join_team():
    bot_uid = request.args.get('bot_uid')
    team_code = request.args.get('tc')
    uid1 = request.args.get('uid1')
    uid2 = request.args.get('uid2')
    uid3 = request.args.get('uid3')
    uid4 = request.args.get('uid4')
    uid5 = request.args.get('uid5')
    emote_id_str = request.args.get('emote_id')

    if not team_code or not emote_id_str:
        return jsonify({"status": "error", "message": "tc এবং emote_id দিন"})
    if not bot_uid or bot_uid not in user_bots:
        return jsonify({"status": "error", "message": "Bot চালু নেই। আগে Login করুন।"})

    bot_data = user_bots[bot_uid]
    if bot_data.get('status') != 'online':
        return jsonify({"status": "error", "message": "Bot online হয়নি এখনো।"})

    try:
        emote_id = int(emote_id_str)
    except:
        return jsonify({"status": "error", "message": "emote_id অবশ্যই number হতে হবে"})

    uids = [u for u in [uid1, uid2, uid3, uid4, uid5] if u]
    if not uids:
        return jsonify({"status": "error", "message": "অন্তত একটি UID দিন"})

    global _global_loop
    asyncio.run_coroutine_threadsafe(
        perform_emote_for_user(bot_data, team_code, uids, emote_id),
        _global_loop
    )
    return jsonify({"status": "success", "message": "Emote পাঠানো হয়েছে!", "uids": uids, "emote_id": emote_id_str})

@app.route('/api/visits')
def get_visits():
    v = load_visits()
    return jsonify({"total": v.get("total", 0), "today": v.get("today", 0)})

@app.route('/api/status')
def bot_status():
    uid = request.args.get('uid')
    if not uid:
        return jsonify({"status": "error", "message": "uid required"})
    if uid in user_bots:
        return jsonify({"status": user_bots[uid].get('status', 'unknown'), "uid": uid})
    return jsonify({"status": "not_found"})

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8000))
    print(f"[SERVER] Starting AX Emote Bot Server on port {port}")
    app.run(host='0.0.0.0', port=port, debug=False, use_reloader=False, threaded=True)
