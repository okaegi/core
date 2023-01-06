import logging
import threading

from control import data
from helpermodules import pub

log = logging.getLogger(__name__)


class ModuleUpdateCompletedContext:
    def __init__(self, event_module_update_completed: threading.Event):
        self.event_module_update_completed = event_module_update_completed

    def __enter__(self):
        timeout = data.data.general_data.data.control_interval/2
        if self.event_module_update_completed.wait(timeout) is False:
            log.error(
                "Modul-Daten wurden noch nicht vollständig empfangen. Timeout abgelaufen, fortsetzen der Regelung.")
        return None

    def __exit__(self, exception_type, exception, exception_traceback) -> bool:
        self.event_module_update_completed.clear()
        pub.Pub().pub("openWB/set/system/device/module_update_completed", True)
        return True